'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import { ThemeContainer } from "./theme-container";

// 글로벌 스타일 초기화
  // // Initial appearance on page load when `appearance` is explicitly set to `light` or `dark`
  // const ExplicitRootAppearanceScript = React.memo(
  //   ({ appearance }: { appearance: Exclude<ThemeOptions['appearance'], 'inherit'> }) => (
  //     <script
  //       dangerouslySetInnerHTML={{
  //         __html: `!(function(){try{var d=document.documentElement,c=d.classList;c.remove('light','dark');d.style.colorScheme='${appearance}';c.add('${appearance}');}catch(e){}})();`,
  //       }}
  //     ></script>
  //   ),
  //   () => true // Never re-render
  // );


// accentColor를 변수로 받아서 그것에 잘 어룰리는 grayColor를 리턴하는 것 추가
//   const resolvedGrayColor = grayColor === 'auto' ? getMatchingGrayColor(accentColor) : grayColor;


// 화변이 동적으로 변할때 글로벌 스타일의 설정 추가
//  React.useEffect(() => updateThemeAppearanceClass(appearanceProp), [appearanceProp]);


// 툴팁 컴포넌트를 만들어서 tooltip을 적용하는 것


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
