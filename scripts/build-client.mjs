import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const readBytes = (name) => fs.readFileSync(path.join(root, name));
const readText = (name) => readBytes(name).toString('utf8');
const font = `data:font/ttf;base64,${readBytes('assets/Saira.ttf').toString('base64')}`;
const siBackground = `data:image/jpeg;base64,${readBytes('assets/si-background.jpg').toString('base64')}`;
const contour = (name) => `data:image/svg+xml;base64,${readBytes(name).toString('base64')}`;
const css = readText('skin.css')
  .replaceAll('__SAIRA_DATA_URI__', font)
  .replaceAll('__SI_BACKGROUND_DATA_URI__', siBackground)
  .replaceAll('__CONTOUR_A_DATA_URI__', contour('assets/contour-a.svg'))
  .replaceAll('__CONTOUR_B_DATA_URI__', contour('assets/contour-b.svg'));
const template = readText('client.template.js');
const marker = '/*__SKIN_CSS_JSON__*/ ""';
if (!template.includes(marker)) throw new Error('CSS marker missing');
const client = template.replace(marker, JSON.stringify(css));
if (/__(?:SAIRA|CONTOUR|SI_BACKGROUND|SKIN_CSS)[A-Z_]*__/.test(client)) {
  throw new Error('Unexpanded asset marker');
}
fs.writeFileSync(path.join(root, 'client.js'), client);
console.log(`Built client.js (${Buffer.byteLength(client)} bytes)`);
