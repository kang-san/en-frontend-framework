import React from 'react';
import { ThemeProvider } from './theme-provider';
import { ThemedContainer } from './theme-container';
import { globalStyles } from '../src/themes/global-styles';
import { useThemeChange } from './theme-change-hook';
import { ThemeProps } from './theme-provider';

const defaultTheme: ThemeProps = {
  hasBackground: true,
  appearance: 'inherit',
  accentColor: 'indigo',
  grayColor: 'auto',
  panelBackground: 'translucent',
  dataRadius: 'medium',
  dataScaling: '100%',
};

export const Theme: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useThemeChange();
  globalStyles();
  
  return (
    <ThemeProvider defaultTheme={defaultTheme}>
      <ThemedContainer>{children}</ThemedContainer>
    </ThemeProvider>
  );
};