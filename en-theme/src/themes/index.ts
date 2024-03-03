import { createStitches } from '@stitches/react';
import { fonts } from '../styles/fonts';
import { lightColor, darkColor, whiteA, blackA, contrast } from '../styles/tokens/colors';
import { radiiNone, radiiSmall, radiiMedium, radiiLarge, radiiFull } from 'src/styles/tokens/radii';

export const { styled, theme, globalCss, keyframes, createTheme } = createStitches({
  theme: {
    color: {
      ...lightColor,
      ...darkColor,
      ...whiteA,
      ...blackA,

      ...contrast,
    },
    radii: {
      ...radiiNone,
      ...radiiSmall,
      ...radiiMedium,
      ...radiiLarge,
      ...radiiFull,
    },
    scaling: {
      '90': 0.9,
      '95': 0.95,
      '100': 1,
      '105': 1.05,
      '110': 1.1,
    }
  },
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

