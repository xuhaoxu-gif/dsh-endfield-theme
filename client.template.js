window.__ModuleLoader__.load({
  id: '@local/dsh-endfield-theme',
  factory(require) {
    const React = require('react');
    const h = React.createElement;
    const css = /*__SKIN_CSS_JSON__*/ "";
    const tokens = {
      '--dsw-alias-bg-base': { light: '#F4F4F2', dark: '#191919' },
      '--dsw-alias-bg-layer-1': { light: '#FFFFFF', dark: '#222222' },
      '--dsw-alias-bg-layer-2': { light: '#E4E4E0', dark: '#2E2E2E' },
      '--dsw-alias-bg-overlay': { light: '#FFFFFF', dark: '#222222' },
      '--dsw-alias-border-l1': { light: '#D9D9D6', dark: '#353535' },
      '--dsw-alias-border-l2': { light: '#5C5C5C', dark: '#A3A3A3' },
      '--dsw-alias-brand-primary': { light: '#161616', dark: '#FFFA00' },
      '--dsw-alias-label-primary': { light: '#161616', dark: '#EDEDED' },
      '--dsw-alias-label-secondary': { light: '#5C5C5C', dark: '#A3A3A3' },
      '--dsw-alias-state-error-primary': { light: '#B3261E', dark: '#FF8A7A' },
      '--dsw-alias-state-idle-primary': { light: '#5C5C5C', dark: '#A3A3A3' },
      '--dsw-alias-state-success-primary': { light: '#161616', dark: '#EDEDED' },
      '--dsw-alias-state-warn-primary': { light: '#161616', dark: '#FFFA00' },
      '--dsw-specific-sidebar-fill': { light: '#F4F4F2', dark: '#191919' },
    };
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
        const removeSlot = ctx.slots.inject('shell.overlay', () => ctx.slots.register({
          name: 'shell.overlay', id: 'dsh-endfield-theme', order: -1000,
        }, Skin));
        return () => { removeSlot(); removeTokens(); };
      },
    };
  },
});
