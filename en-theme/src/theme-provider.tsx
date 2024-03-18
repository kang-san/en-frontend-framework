import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { theme, globalStyles } from '../src/themes';

export type ThemeProps = {
  hasBackground?: boolean;
  appearance?: 'inherit' | 'light' | 'dark';
  accentColor?: keyof typeof theme.colors;
  grayColor?: 'mauve' | 'slate' | 'sage' | 'olive' | 'sand' | 'gray' | 'auto';
  panelBackground?: 'solid' | 'translucent';
  dataRadius?: keyof typeof theme.variants.dataRadius;
  dataScaling?: keyof typeof theme.variants.dataScaling;
};

const ThemeContext = createContext<{
  themeState: ThemeProps;
  setThemeAttribute: <K extends keyof ThemeProps>(attribute: K, value: ThemeProps[K]) => void;
}>({
  themeState: {} as ThemeProps,
  setThemeAttribute: () => {},
});

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

type ThemeProviderProps = {
  defaultTheme?: ThemeProps;
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  defaultTheme = {},
  children,
}) => {
  const [themeState, setThemeState] = useState<ThemeProps>({
    hasBackground: defaultTheme.hasBackground ?? true,
    appearance: defaultTheme.appearance ?? 'inherit',
    accentColor: defaultTheme.accentColor ?? 'indigo',
    grayColor: defaultTheme.grayColor ?? 'auto',
    panelBackground: defaultTheme.panelBackground ?? 'translucent',
    dataRadius: defaultTheme.dataRadius ?? 'medium',
    dataScaling: defaultTheme.dataScaling ?? '100',
  });

  const setThemeAttribute = <K extends keyof ThemeProps>(attribute: K, value: ThemeProps[K]) => {
    setThemeState(prev => ({ 
      ...prev, 
      [attribute]: value
    }));
  };

  const resolvedGrayColor = themeState.grayColor === 'auto' ? getMatchingGrayColor(themeState.accentColor) : themeState.grayColor;

  useEffect(() => {
    setThemeState(prevState => ({
      ...prevState,
      grayColor: resolvedGrayColor
    }));
  }, [themeState.accentColor, themeState.grayColor]);

  useEffect(() => {
    setThemeState(prev => ({
      ...prev,
      panelBackground: themeState.panelBackground,
    }));
  }, [themeState.panelBackground]);
  
  useEffect(() => {
    setThemeState(prev => ({
      ...prev,
      dataRadius: themeState.dataRadius,
    }));
  }, [themeState.dataRadius]);

  // 라이트/다크 모드 적용 로직 추가
  useEffect(() => {
    if (themeState.appearance && themeState.appearance !== 'inherit') {
      const htmlElement = document.documentElement;
      htmlElement.classList.remove('light', 'dark');
      htmlElement.classList.add(themeState.appearance);
      htmlElement.style.colorScheme = themeState.appearance;
    }
  }, [themeState.appearance]);
  
  useEffect(() => {
    setThemeState(prev => ({
      ...prev,
      dataScaling: themeState.dataScaling,
    }));
  }, [themeState.dataScaling]);

  const className = globalStyles(theme.variants.dataScaling[themeState.dataScaling], theme.variants.dataRadius[themeState.dataRadius]);
  return (
    <ThemeContext.Provider value={{ themeState, setThemeAttribute }}>
      {themeState.appearance !== 'inherit' && (
        <ExplicitRootAppearanceScript appearance={themeState.appearance} />
      )}
      <div className={className}>{children}</div>
    </ThemeContext.Provider>
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

// 액센트 색상에 맞는 회색 계열 결정
const getMatchingGrayColor = (accentColor: ThemeProps['accentColor']) => {
  // 액센트 색상에 따라 회색 계열 결정 로직 구현
  switch (accentColor) {
    case 'tomato':
    case 'red':
    case 'ruby':
    case 'crimson':
    case 'pink':
    case 'plum':
    case 'purple':
    case 'violet':
    case 'iris':
    case 'indigo':
      return 'mauve';
    case 'blue':
    case 'cyan':
    case 'teal':
    case 'jade':
      return 'slate';
    case 'green':
    case 'grass':
    case 'lime':
      return 'sage';
    case 'yellow':
    case 'amber':
    case 'orange':
    case 'brown':
    case 'gold':
    case 'bronze':
      return 'sand';
    default:
      return 'gray';
  }
};