import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (name) => fs.readFileSync(path.join(root, name), 'utf8');
const pkg = JSON.parse(read('package.json'));
assert.equal(pkg.name, '@local/dsh-endfield-theme');
assert.equal(pkg.version, '2.1.0');
assert.equal(pkg.dsh.bundle.patch, './cordis.patch.yml');
assert.equal(pkg.dsh.client.platform, 'web');
assert.equal(pkg.exports['./icon'], './icon.svg');
const client = read('client.js');
for (const token of [
  '--dsw-alias-bg-base', '--dsw-alias-bg-layer-1', '--dsw-alias-bg-layer-2',
  '--dsw-alias-bg-overlay', '--dsw-alias-border-l1', '--dsw-alias-border-l2',
  '--dsw-alias-brand-primary', '--dsw-alias-label-primary',
  '--dsw-alias-label-secondary', '--dsw-alias-state-error-primary',
  '--dsw-alias-state-idle-primary', '--dsw-alias-state-success-primary',
  '--dsw-alias-state-warn-primary', '--dsw-specific-sidebar-fill',
]) assert.ok(client.includes(token), `missing token ${token}`);
for (const required of [
  'shell.overlay', 'conversation.hero.brand.mark', 'conversation.composer.dock',
  'overrideTokens', 'prefers-reduced-motion', 'SiArtwork', 'dsh-endfield__si-art',
  '#F2F4F1', '#171B19', '@font-face', 'data:font/ttf;base64,',
  'data:image/jpeg;base64,', 'dsh-endfield__strip',
]) assert.ok(client.includes(required), `missing ${required}`);
assert.ok(!/__(?:SAIRA|CONTOUR|SI_BACKGROUND|SKIN_CSS)[A-Z_]*__/.test(client), 'unexpanded asset marker');
assert.ok(!/https?:\/\//.test(client), 'runtime URL dependency found');
assert.ok(!/bc921cb1c5ef2f2365573988386e6965d5c24b0cfcc5d0a45d6c5981dff91a7a|a1601bbc698af4bb8fe4209276e63dbc0d195fabd2f8e11abf25e3115d7c1938/.test(client), 'reference image embedded');
assert.ok(fs.statSync(path.join(root, 'assets/si-background.jpg')).size > 100000, 'background artwork missing');
assert.ok(fs.statSync(path.join(root, 'icon.svg')).size < 256 * 1024);
assert.ok(read('icon.svg').includes('<svg'));
assert.ok(read('assets/Saira-OFL.txt').includes('SIL OPEN FONT LICENSE'));
assert.ok(read('locale/en.json').includes('Si'));
assert.ok(read('locale/zh.json').includes('祀'));
console.log('Static verification passed');
