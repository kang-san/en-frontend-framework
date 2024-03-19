import React from 'react';
import { globalCss } from '@stitches/react';
import { useTheme } from '../theme-provider';
import { theme } from './theme';

const globalStyles = globalCss({
  ':root': {
    '--radius-1': `calc(3px * ${theme.dataScaling['100%']['--scaling']} * ${theme.variants.dataRadius['medium']['--radius-factor']})`,
    '--radius-2': `calc(4px * ${theme.dataScaling['100%']['--scaling']} * ${theme.variants.dataRadius['medium']['--radius-factor']})`,
    '--radius-3': `calc(6px * ${theme.dataScaling['100%']['--scaling']} * ${theme.variants.dataRadius['medium']['--radius-factor']})`,
    '--radius-4': `calc(8px * ${theme.dataScaling['100%']['--scaling']} * ${theme.variants.dataRadius['medium']['--radius-factor']})`,
    '--radius-5': `calc(12px * ${theme.dataScaling['100%']['--scaling']} * ${theme.variants.dataRadius['medium']['--radius-factor']})`,
    '--radius-6': `calc(16px * ${theme.dataScaling['100%']['--scaling']} * ${theme.variants.dataRadius['medium']['--radius-factor']})`,
  },
});

export const GlobalStyles: React.FC = () => {
  const { themeState } = useTheme();
  globalStyles();

  return null;
};