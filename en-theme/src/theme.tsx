'use client';

import React, { useState, useEffect, ReactNode, createContext, useContext } from 'react';
import { ThemeContainer } from "./theme-container";

// 툴팁 컴포넌트를 만들어서 tooltip을 적용하는 것

type ThemeProps = {
  hasBackground?: boolean;
  appearance?: 'inherit' | 'light' | 'dark';
  accentColor?: 'tomato' | 'red' | 'ruby' | 'crimson' | 'pink' | 'plum' | 'purple' | 'violet' | 'iris' | 'indigo' | 'blue' | 'cyan' | 'teal' | 'jade' | 'green' | 'grass' | 'orange' | 'brown' | 'sky' | 'mint' | 'lime' | 'yellow' | 'amber' | 'gold' | 'bronze' | 'gray';
  grayColor?: 'mauve' | 'slate' | 'sage' | 'olive' | 'sand' | 'gray' | 'auto';
  panelBackground?: 'solid' | 'translucent';
  dataRadius?: 'none' | 'small' | 'medium' | 'large' | 'full';
  dataScaling?: '90%' | '95%' | '100%' | '105%' | '110%';
  children?: (themeProps: ThemeProps, themeHandlers: any) => ReactNode;
};

const ThemeContext = createContext<ThemeProps | undefined>(undefined);
export const useTheme = () => useContext(ThemeContext);

export const Theme: React.FC<ThemeProps> = ({
  hasBackground = true,
  appearance = 'inherit',
  accentColor = 'indigo',
  grayColor = 'auto',
  panelBackground = 'translucent',
  dataRadius = 'medium',
  dataScaling = '100%',
  children,
}) => {
  const [themeState, setThemeState] = useState<ThemeProps>({
    appearance,
    accentColor,
    grayColor,
    panelBackground,
    dataRadius,
    dataScaling,
  });

  const setThemeAttribute = <K extends keyof ThemeProps>(attribute: K, value: ThemeProps[K]) => {
    setThemeState(prev => ({ 
      ...prev, 
      [attribute]: value
    }));
  };

  // 액센트 색상에 맞는 회색 계열 결정
  const resolvedGrayColor = themeState.grayColor === 'auto' ? getMatchingGrayColor(themeState.accentColor) : themeState.grayColor;

  useEffect(() => {
    setThemeState(prevState => ({
      ...prevState,
      grayColor: resolvedGrayColor
    }));
  }, [themeState.accentColor, themeState.grayColor]);

  // 이 함수는 이제 appearance 상태를 업데이트하는 로직을 포함합니다.
  const updateThemeAppearanceClass = (appearance: ThemeProps['appearance']) => {
    if (appearance === 'inherit') return;

    setThemeState(prev => ({
      ...prev,
      appearance, // 상태를 직접 업데이트
    }));
  };

  useEffect(() => {

  }, [themeState.panelBackground]);

  useEffect(() => {

  }, [themeState.dataRadius])

  useEffect(() => {
    updateThemeAppearanceClass(themeState.appearance);
  }, [themeState.appearance]);

  useEffect(() => {

  }, [themeState.dataScaling])

  return (
    <ThemeContainer
      hasBackground={hasBackground}
      appearance={themeState.appearance}
      accentColor={themeState.accentColor}
      grayColor={resolvedGrayColor} // 결정된 회색을 테마 컨테이너에 전달
      panelBackground={themeState.panelBackground}
      dataRadius={themeState.dataRadius}
      dataScaling={themeState.dataScaling}
    >
      {typeof children === 'function' ? children(themeState, {
        setAppearance: (value: ThemeProps['appearance']) => setThemeAttribute('appearance', value),
        setAccentColor: (value: ThemeProps['accentColor']) => setThemeAttribute('accentColor', value),
        setGrayColor: (value: ThemeProps['grayColor']) => setThemeAttribute('grayColor', value),
        setPanelBackground: (value: ThemeProps['panelBackground']) => setThemeAttribute('panelBackground', value),
        setRadius: (value: ThemeProps['dataRadius']) => setThemeAttribute('dataRadius', value),
        setScaling: (value: ThemeProps['dataScaling']) => setThemeAttribute('dataScaling', value),
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
  

  