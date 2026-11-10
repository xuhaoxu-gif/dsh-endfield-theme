window.__ModuleLoader__.load({
  id: '@local/dsh-endfield-theme',
  factory(require) {
    const React = require('react');
    const h = React.createElement;
    const css = /*__SKIN_CSS_JSON__*/ "";
    const tokens = {
      '--dsw-alias-bg-base': { light: '#F2F4F1', dark: '#171B19' },
      '--dsw-alias-bg-layer-1': { light: '#FBFCFA', dark: '#202622' },
      '--dsw-alias-bg-layer-2': { light: '#E3E8E3', dark: '#2A322D' },
      '--dsw-alias-bg-overlay': { light: '#FBFCFA', dark: '#202622' },
      '--dsw-alias-border-l1': { light: '#C9D0C9', dark: '#39443D' },
      '--dsw-alias-border-l2': { light: '#66716B', dark: '#A4AFA7' },
      '--dsw-alias-brand-primary': { light: '#151917', dark: '#FFFA00' },
      '--dsw-alias-label-primary': { light: '#151917', dark: '#E7ECE7' },
      '--dsw-alias-label-secondary': { light: '#66716B', dark: '#A4AFA7' },
      '--dsw-alias-state-error-primary': { light: '#B3261E', dark: '#FF8A7A' },
      '--dsw-alias-state-idle-primary': { light: '#66716B', dark: '#A4AFA7' },
      '--dsw-alias-state-success-primary': { light: '#151917', dark: '#E7ECE7' },
      '--dsw-alias-state-warn-primary': { light: '#151917', dark: '#FFFA00' },
      '--dsw-specific-sidebar-fill': { light: '#EDF0EC', dark: '#141816' },
    };

    function SiArtwork() {
      return h('svg', {
        viewBox: '0 0 720 720', fill: 'none',
        'aria-hidden': 'true', focusable: 'false',
      },
        h('path', {
          className: 'dsh-endfield__si-line dsh-endfield__si-line--wide',
          d: 'M98 522 L174 408 L254 352 L298 238 L386 168 L458 96 L434 196 L550 142 L520 252 L624 222 L554 330 L456 376 L402 500 L278 570 L164 632',
        }),
        h('path', {
          className: 'dsh-endfield__si-line',
          d: 'M154 494 L246 452 L330 348 L402 316 L474 236 M126 574 L250 530 L330 474 M478 390 L568 372 L626 316',
        }),
        h('path', {
          className: 'dsh-endfield__si-ink',
          d: 'M324 234 L296 118 L390 194 Z M442 172 L506 68 L500 206 Z',
        }),
        h('path', {
          className: 'dsh-endfield__si-signal',
          d: 'M472 270 h22 v22 h-22 Z M104 594 h10 v10 h-10 Z',
        }),
        h('path', {
          className: 'dsh-endfield__si-rule',
          d: 'M88 606 H226 M494 524 H632',
        }));
    }

    function SiHero({ size = 48, className = '' } = {}) {
      return h(React.Fragment, null,
        h('div', {
          className: `dsh-endfield__si-mark ${className}`.trim(),
          style: { width: size, height: size },
          role: 'img', 'aria-label': 'Si theme mark',
        },
          h(SiArtwork)),
        h('div', { className: 'dsh-endfield__si-art', 'aria-hidden': 'true' }));
    }

    function SiBadge() {
      return h('div', { className: 'dsh-endfield__si-badge' },
        h('span', null, '[ 祀 ]'),
        h('span', null, 'SI / DEEPSEEK HARNESS'));
    }

    function Skin() {
      return h(React.Fragment, null,
        h('style', { dangerouslySetInnerHTML: { __html: css } }),
        h('div', { className: 'dsh-endfield__strip', 'aria-hidden': 'true' },
          h('i'), h('i'), h('i')));
    }

    return {
      inject: ['theme', 'slots'],
      apply(ctx) {
        const removeTokens = ctx.theme.overrideTokens('dsh-endfield-theme', tokens);
        const removeSkin = ctx.slots.inject('shell.overlay', () => ctx.slots.register({
          name: 'shell.overlay', id: 'dsh-endfield-theme', order: -1000,
        }, Skin));
        const removeHero = ctx.slots.inject('conversation.hero.brand.mark', () => ctx.slots.register({
          name: 'conversation.hero.brand.mark', id: 'dsh-endfield-si-hero', order: -10,
        }, SiHero));
        const removeBadge = ctx.slots.inject('conversation.composer.dock', () => ctx.slots.register({
          name: 'conversation.composer.dock', id: 'dsh-endfield-si-badge', order: -10,
        }, SiBadge));
        return () => {
          removeBadge();
          removeHero();
          removeSkin();
          removeTokens();
        };
      },
    };
  },
});
