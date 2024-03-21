import React, { createContext, useContext, ReactNode, useEffect, useState, useMemo } from 'react';

export interface ThemeProps {
  hasBackground?: boolean;
  appearance?: 'inherit' | 'light' | 'dark';
  accentColor?: 'tomato' | 'red' | 'ruby' | 'crimson' | 'pink' | 'plum' | 'purple' | 'violet' | 'iris' | 'indigo' | 'blue' | 'cyan' | 'teal' | 'jade' | 'green' | 'grass' | 'orange' | 'brown' | 'sky' | 'mint' | 'lime' | 'yellow' | 'amber' | 'gold' | 'bronze' | 'gray';
  grayColor?: 'mauve' | 'slate' | 'sage' | 'olive' | 'sand' | 'gray' | 'auto';
  panelBackground?: 'solid' | 'translucent';
  dataRadius?: 'none' | 'small' | 'medium' | 'large' | 'full';
  dataScaling?: '90%' | '95%' | '100%' | '105%' | '110%';
}

export interface DataRadiusProps {
  none: { '--radius-factor': number, '--radius-full': string, '--radius-thumb': string };
  small: { '--radius-factor': number, '--radius-full': string, '--radius-thumb': string };
  medium: { '--radius-factor': number, '--radius-full': string, '--radius-thumb': string };
  large: { '--radius-factor': number, '--radius-full': string, '--radius-thumb': string };
  full: { '--radius-factor': number, '--radius-full': string, '--radius-thumb': string };
}

export interface DataScalingProps {
  '90%': { '--scaling': number };
  '95%': { '--scaling': number };
  '100%': { '--scaling': number };
  '105%': { '--scaling': number };
  '110%': { '--scaling': number };
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
  defaultTheme?: ThemeProps;
  children: ReactNode;
};

const defaultDataRadiusProps: DataRadiusProps = {
  none: { '--radius-factor': 0, '--radius-full': '0px', '--radius-thumb': '0.5px' },
  small: { '--radius-factor': 0.75, '--radius-full': '0px', '--radius-thumb': '0.5px' },
  medium: { '--radius-factor': 1, '--radius-full': '0px', '--radius-thumb': '9999px' },
  large: { '--radius-factor': 1.5, '--radius-full': '0px', '--radius-thumb': '9999px' },
  full: { '--radius-factor': 1.5, '--radius-full': '9999px', '--radius-thumb': '9999px' },
};

const defaultDataScalingProps: DataScalingProps = {
  '90%': { '--scaling': 0.9 },
  '95%': { '--scaling': 0.95 },
  '100%': { '--scaling': 1 },
  '105%': { '--scaling': 1.05 },
  '110%': { '--scaling': 1.1 },
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  defaultTheme = {},
  children,
}) => {
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