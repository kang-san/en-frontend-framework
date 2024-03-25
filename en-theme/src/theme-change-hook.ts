import { useEffect } from 'react';
import { useTheme, ThemeProps } from './theme-provider';

/**
 * 테마 변경 시 수행할 작업을 추가할 수 있는 커스텀 훅입니다.
 */
export const useThemeChange = () => {
  const { themeState, setThemeAttribute } = useTheme();

  useEffect(() => {
    const handleThemeChange = () => {
      // 테마 변경 이벤트에 따라 수행할 작업을 여기에 추가합니다.
      console.log('Theme changed:', themeState);

      // 예시: 특정 속성이 변경되면 다른 속성도 업데이트
      if (themeState.accentColor === 'tomato') {
        setThemeAttribute('panelBackground', 'solid');
      }
    };

    // 최초 렌더링 시에도 handleThemeChange 함수를 실행합니다.
    handleThemeChange();

    // themeState의 값이 변경될 때마다 handleThemeChange 함수를 실행합니다.
    const unsubscribe = Object.entries(themeState).forEach(([key, value]) => {
      const previousValue = themeState[key as keyof ThemeProps];
      if (previousValue !== value) {
        handleThemeChange();
      }
    });

    // 컴포넌트 unmount 시 unsubscribe 함수를 실행합니다.
    return unsubscribe;
  }, [themeState, setThemeAttribute]);
};