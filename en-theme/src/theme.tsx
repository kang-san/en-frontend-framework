import React from 'react';
import { ThemeProvider } from './theme-provider';
import { ThemedContainer } from './theme-container';
import { GlobalStyles } from '../src/themes/global-styles';
import { useThemeChange } from './theme-change-hook';

export const Theme: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useThemeChange();

  return (
    <ThemeProvider>
      <GlobalStyles />
      <ThemedContainer>{children}</ThemedContainer>
    </ThemeProvider>
  );
};