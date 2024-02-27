import { createStitches } from '@stitches/react';
import { fonts } from '../styles/fonts';
import { lightColor, darkColor, whiteA, blackA, contrast } from '../styles/tokens/colors';

export const { styled, theme, globalCss, keyframes, createTheme } = createStitches({
  theme: {
    color: {
      ...lightColor,
      ...darkColor,
      ...whiteA,
      ...blackA,

      ...contrast,
    }
  }
});

export const lightTheme = createTheme('light-theme', {
  colors: {
    ...lightColor,
    ...whiteA,
  }
});

export const darkTheme = createTheme('dark-theme', {
  colors: {
    ...darkColor,
    ...blackA,
  }
});

export const globalStyles = globalCss({
  ...fonts
});

