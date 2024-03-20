// global-styles.ts
import React, { useMemo, createElement } from 'react';
import { globalCss } from '@stitches/react';
import { useTheme, ThemeProps } from '../theme-provider';

const calculateCssVariables = (dataScaling: ThemeProps['dataScaling'], dataRadius: ThemeProps['dataRadius']) => {
  const variables: Record<string, string> = {};

  const radiusBaseFactors = [3, 4, 6, 8, 12, 16];
  const radiusKeys = ['--radius-1', '--radius-2', '--radius-3', '--radius-4', '--radius-5', '--radius-6'];

  radiusKeys.forEach((key, index) => {
    variables[key] = `calc(${radiusBaseFactors[index]}px * ${dataScaling?.['100%']['--scaling'] ?? 1} * ${dataRadius?.medium['--radius-factor'] ?? 1})`;
  });

  return variables;
};

export const GlobalStyles: React.FC = () => {
  const { themeState } = useTheme();
  const cssVariables = useMemo(
    () => calculateCssVariables(themeState.dataScaling, themeState.dataRadius),
    [themeState.dataScaling, themeState.dataRadius]
  );

  const globalStyles = globalCss({
    ':root': cssVariables,
  });

  return createElement('div', { className: globalStyles() });
};