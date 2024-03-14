'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import { ThemeContainer } from "./theme-container";

// 툴팁 컴포넌트를 만들어서 tooltip을 적용하는 것

type ThemeProps = {
  hasBackground?: boolean;
  appearance?: 'inherit' | 'light' | 'dark';
  accentColor?: 'tomato' | 'red' | 'ruby' | 'crimson' | 'pink' | 'plum' | 'purple' | 'violet' | 'iris' | 'indigo' | 'blue' | 'cyan' | 'teal' | 'jade' | 'green' | 'grass' | 'orange' | 'brown' | 'sky' | 'mint' | 'lime' | 'yellow' | 'amber' | 'gold' | 'bronze' | 'gray';
  grayColor?: 'mauve' | 'slate' | 'sage' | 'olive' | 'sand' | 'gray' | 'auto';
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

  // 액센트 색상에 맞는 회색 계열 결정
  const resolvedGrayColor = themeState.grayColor === 'auto' ? getMatchingGrayColor(themeState.accentColor) : themeState.grayColor;

  useEffect(() => {
    setThemeState(prevState => ({
      ...prevState,
      grayColor: resolvedGrayColor
    }));
  }, [themeState.accentColor, themeState.grayColor]);

  
  // Client-side only changes when `appearance` prop is changed while developing
  React.useEffect(() => {
    updateThemeAppearanceClass(themeState.appearance);
  }, [themeState.appearance]);

  return (
    <ThemeContainer
      hasBackground={hasBackground.toString()}
      appearance={themeState.appearance}
      accentColor={themeState.accentColor}
      grayColor={resolvedGrayColor} // 결정된 회색을 테마 컨테이너에 전달
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

  // Initial appearance on page load when `appearance` is explicitly set to `light` or `dark`
  export const ExplicitRootAppearanceScript = React.memo(
    ({ appearance }: { appearance: Exclude<ThemeProps['appearance'], 'inherit'> }) => (
      <script
        dangerouslySetInnerHTML={{
          __html: `!(function(){try{var d=document.documentElement,c=d.classList;c.remove('light','dark');d.style.colorScheme='${appearance}';c.add('${appearance}');}catch(e){}})();`,
        }}
      ></script>
    ),
    () => true // Never re-render
  );
  ExplicitRootAppearanceScript.displayName = 'ExplicitRootAppearanceScript';

  function getMatchingGrayColor(accentColor: ThemeProps['accentColor']): ThemeProps['grayColor'] {
    if (accentColor === 'gray') {
      return 'gray'; // 'gray' 액센트 색상인 경우 바로 'gray' 반환
    }
    
    // 액센트 색상에 따라 매칭되는 회색 계열 색상 결정
    switch (accentColor) {
      case 'tomato':
      case 'red':
      case 'ruby':
      case 'crimson':
      case 'pink':
      case 'plum':
      case 'purple':
      case 'violet':
        return 'mauve';
      case 'iris':
      case 'indigo':
      case 'blue':
      case 'sky':
      case 'cyan':
        return 'slate';
      case 'teal':
      case 'jade':
      case 'mint':
      case 'green':
        return 'sage';
      case 'grass':
      case 'lime':
        return 'olive';
      case 'yellow':
      case 'amber':
      case 'orange':
      case 'brown':
      case 'gold':
      case 'bronze':
        return 'sand';
      default:
        return 'gray'; // 기본값으로 'gray'를 리턴하여 어떤 케이스에도 해당하지 않는 경우에 대비
    }
  }
  
  export function updateThemeAppearanceClass(appearance: ThemeProps['appearance']) {
    const root = document.documentElement;
  
    // 모든 관련 클래스 제거
    root.classList.remove('light-theme', 'dark-theme', 'light', 'dark');
    
    // 'inherit' 또는 'undefined'가 아닌 경우에만 새로운 클래스 추가
    if (appearance && appearance !== 'inherit') {
      // colorScheme 설정에서 'undefined' 배제
      root.style.colorScheme = appearance; // appearance가 'undefined'일 수 없으므로 안전하게 할당 가능
  
      // 테마에 따라 적절한 클래스 추가
      let themeClass = appearance; // 기본값 설정
      // 'light' 또는 'dark'가 아니면 '-theme' 접미사 추가
      if (appearance !== 'light' && appearance !== 'dark') {
        themeClass += '-theme';
      }
      root.classList.add(themeClass);
    }
  }
  