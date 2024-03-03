import { styled } from '@stitches/react';
import { grass, gray, indigo } from './primitive-color';

export const ThemeImpl = styled('div', {

  variants: {
    hasBackground: {
      true: { backgroundColor:'$grass4' },
      false: { backgroundColor: 'transparent' },
    },
    appearance: {
      light: { color: 'black', backgroundColor: 'white' },
      dark: { color: 'white', backgroundColor: 'black' },
      inherit: {}, // 'inherit'의 경우, CSS 상속을 사용하거나 기본값을 설정하지 않음
    },
    accentColor: {
      indigo: { borderColor: '$indigo4' }, 
      gray: { borderColor: '$gray4' },
    },
    grayColor: {
      auto: { color: '$gray5'},
    },
    panelBackground: {
      solid: { backdropFilter: 'none' },
      translucent: { backdropFilter: 'blur(10px)' },
    },
    radius: {
      none: { borderRadius: '0px' },
      small: { borderRadius: '4px' },
      medium: { borderRadius: '8px' },
      large: { borderRadius: '16px' },
      full: { borderRadius: '9999px' },
    },
    scaling: {
      '90%': { transform: 'scale(0.9)' },
      '95%': { transform: 'scale(0.95)' },
      '100%': { transform: 'scale(1.0)' },
      '105%': { transform: 'scale(1.05)' },
      '110%': { transform: 'scale(1.1)' },
    },
  },
});