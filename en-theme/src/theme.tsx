'use client';

import React, { useState, useEffect } from 'react';
import { ThemeContainer } from "./theme-container";

type ThemeProps = {
  hasBackground?: boolean;
  appearance?: 'inherit' | 'light' | 'dark';
  accentColor?: 'tomato' | 'red' | 'ruby' | 'crimson' | 'pink' | 'plum' | 'purple' | 'violet' | 'iris' | 'indigo' | 'blue' | 'cyan' | 'teal' | 'jade' | 'green' | 'grass' | 'orange' | 'brown' | 'sky' | 'mint' | 'lime' | 'yellow' | 'amber' | 'gold' | 'bronze' | 'gray';
  grayColor?: 'mauve' | 'slate' | 'sage' | 'olive' | 'sand' | 'auto';
  panelBackground?: 'solid' | 'translucent';
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full';
  scaling?: '90%' | '95%' | '100%' | '105%' | '110%';
  children?: (themeProps: ThemeProps, themeHandlers: any) => ReactNode;
};

export const Theme: React.FC<ThemeProps> = ({
  hasBackground = true,
  appearance = 'inherit',
  accentColor = 'indigo',
  grayColor = 'auto',
  panelBackground = 'translucent',
  radius = 'medium',
  scaling = '100%',
  children,
}) => {
  const [themeState, setThemeState] = useState<ThemeProps>({
    appearance,
    accentColor,
    grayColor,
    panelBackground,
    radius,
    scaling,
  });

  const setThemeAttribute = <K extends keyof ThemeProps>(attribute: K, value: ThemeProps[K]) => {
    setThemeState(prev => ({ ...prev, [attribute]: value }));
  };

  useEffect(() => {
    // Add more CSS variables updates based on the themeState if needed

  }, [themeState, hasBackground]);

  return (
    <ThemeContainer
      hasBackground={hasBackground.toString()}
      appearance={themeState.appearance}
      accentColor={themeState.accentColor}
      grayColor={themeState.grayColor}
      panelBackground={themeState.panelBackground}
      radius={themeState.radius}
      scaling={themeState.scaling}
    >
      {typeof children === 'function' ? children(themeState, {
        setAppearance: (value: ThemeProps['appearance']) => setThemeAttribute('appearance', value),
        setAccentColor: (value: ThemeProps['accentColor']) => setThemeAttribute('accentColor', value),
        setGrayColor: (value: ThemeProps['grayColor']) => setThemeAttribute('grayColor', value),
        setPanelBackground: (value: ThemeProps['panelBackground']) => setThemeAttribute('panelBackground', value),
        setRadius: (value: ThemeProps['radius']) => setThemeAttribute('radius', value),
        setScaling: (value: ThemeProps['scaling']) => setThemeAttribute('scaling', value),
      }) : children}
    </ThemeContainer>
  );
};
