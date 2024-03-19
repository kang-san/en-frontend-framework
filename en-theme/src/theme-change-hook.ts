import { useEffect } from 'react';
import { useTheme, ThemeProps } from './theme-provider';

/**
 * 테마 변경 시 수행할 작업을 추가할 수 있는 커스텀 훅입니다.
 */
export const useThemeChange = () => {
  const { themeState, setThemeAttribute } = useTheme();

  useEffect(() => {
    // 테마 변경 이벤트에 따라 수행할 작업을 여기에 추가합니다.
    console.log('Theme changed:', themeState);

    // 예시: 특정 속성이 변경되면 다른 속성도 업데이트
    if (themeState.accentColor === 'tomato') {
      setThemeAttribute('panelBackground', 'solid');
    }
  }, [themeState.accentColor, themeState.panelBackground, setThemeAttribute]);
};