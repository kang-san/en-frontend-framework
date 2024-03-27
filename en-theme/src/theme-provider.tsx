import React, { createContext, useContext, ReactNode, useEffect, useState, useMemo } from 'react';
import { RadiusValue } from './styles/types/radius.props';
import { ScalingValue } from './styles/types/scaling.props';

export const appearance = ['inherit', 'light', 'dark'] as const;
export const accentColors = ['tomato', 'red', 'ruby', 'crimson', 'pink', 'plum', 'purple', 'violet', 'iris', 'indigo', 'blue', 'cyan', 'teal', 'jade', 'green', 'grass', 'orange', 'brown', 'sky', 'mint', 'lime', 'yellow', 'amber', 'gold', 'bronze', 'gray'] as const;
export const grayColors = ['mauve', 'slate', 'sage', 'olive', 'sand', 'gray', 'auto'] as const;
export const panelBackground = ['solid', 'translucent'] as const;

export interface ThemeProps {
  hasBackground: boolean;
  appearance: typeof appearance[number];
  accentColor: typeof accentColors[number];
  grayColor: typeof grayColors[number];
  panelBackground: typeof panelBackground[number];
  dataRadius: typeof RadiusValue[number];
  dataScaling: typeof ScalingValue[number];
}

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
  defaultTheme: ThemeProps;
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ defaultTheme, children }: ThemeProviderProps) => {
  const [themeState, setThemeState] = useState<ThemeProps>(() => ({
    hasBackground: defaultTheme.hasBackground ?? true,
    appearance: defaultTheme.appearance ?? 'inherit',
    accentColor: defaultTheme.accentColor ?? 'indigo',
    grayColor: defaultTheme.grayColor ?? 'auto',
    panelBackground: defaultTheme.panelBackground ?? 'translucent',
    dataRadius: defaultTheme.dataRadius ?? 'medium',
    dataScaling: defaultTheme.dataScaling ?? '100%',
  }));

  const setThemeAttribute = <K extends keyof ThemeProps>(attribute: K, value: ThemeProps[K]) => {
    if (attribute === 'dataRadius') {
      setThemeState(prev => ({
        ...prev,
        dataRadius: value as ThemeProps['dataRadius'],
      }));
    } else if (attribute === 'dataScaling') {
      setThemeState(prev => ({
        ...prev,
        dataScaling: value as ThemeProps['dataScaling'],
      }));
    } else {
      setThemeState(prev => ({
        ...prev,
        [attribute]: value,
      }));
    }
  };

  const resolvedGrayColor = useMemo(() => {
    if (themeState.grayColor === 'auto') {
      return getMatchingGrayColor(themeState.accentColor);
    }
    return themeState.grayColor;
  }, [themeState.accentColor, themeState.grayColor]);

  useEffect(() => {
    setThemeState(prevState => ({
      ...prevState,
      grayColor: resolvedGrayColor,
    }));
  }, [resolvedGrayColor]);

  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.classList.remove('light', 'dark');

    if (themeState.appearance === 'light' || themeState.appearance === 'dark') {
      htmlElement.classList.add(themeState.appearance);
      htmlElement.style.colorScheme = themeState.appearance;
    } else {
      const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const defaultAppearance = prefersDarkScheme ? 'dark' : 'light';
      htmlElement.classList.add(defaultAppearance);
      htmlElement.style.colorScheme = defaultAppearance;
    }
  }, [themeState.appearance]);

  return (
    <ThemeContext.Provider value={{ themeState, setThemeAttribute }}>
      {children}
    </ThemeContext.Provider>
  );
};

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