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
    // 다른 @font-face 정의를 여기에 계속 추가...
    {
      fontFamily: 'Consolas (Custom)',
      fontWeight: 700,
      fontStyle: 'italic',
      // sizeAdjust: '110%',
      // ascentOverride: '85%',
      // descentOverride: '22%',
      src: 'local("Consolas Bold Italic")',
    },
    // 필요한 모든 @font-face 규칙을 추가하세요.
  ],
});
