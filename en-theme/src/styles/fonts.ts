import { globalCss } from '@stitches/react';

export const fonts = globalCss({
  '@font-face': [
    {
      fontFamily: 'Segoe UI (Custom)',
      fontWeight: 300,
      fontStyle: 'normal',
      // sizeAdjust: '103%',
      // descentOverride: '35%',
      // ascentOverride: '105%',
      src: 'local("Segoe UI Semilight"), local("Segoe UI")',
    },
    {
      fontFamily: 'Consolas (Custom)',
      fontWeight: 700,
      fontStyle: 'italic',
      // sizeAdjust: '110%',
      // ascentOverride: '85%',
      // descentOverride: '22%',
      src: 'local("Consolas Bold Italic")',
    },

    // other font-faces 추가
  ],
});
