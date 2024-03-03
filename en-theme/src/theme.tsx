'use client'

import { useState, useEffect } from 'react';
import { ThemeContainer } from "./theme-container"
import { darkTheme, lightTheme } from "./themes"

interface ThemeProps {
  isRoot: boolean;
  hasBackground: boolean;
  appearanceProp: 'light' | 'dark' | 'inherit';
  // accentColorProp: 'tomato' | 'red' | 'ruby' | 'crimson' | 'pink' | 'plum' | 'purple' | 'violet' | 'iris' | 'indigo' | 'blue' | 'cyan' | 'teal' | 'jade' | 'green' | 'grass' | 'brown' | 'orange' | 'sky' | 'mint' | 'lime' | 'yellow' | 'amber' | 'gold' | 'bronze' | 'sand' | 'default';
  // grayColorProp: 'mauve' | 'slate' | 'sage' | 'olive' | 'sand' | 'auto';
  accentColorProp: 'default';
  grayColorProp: 'auto';
  panelBackgroundProp: 'solid' | 'translucent';
  radiusProp: 'radius1' | 'radius2';
  scalingProp: '90%' | '95%' | '100%' | '105%' | '110%';
  //
  onAppearanceChange?: (appearance: 'light' | 'dark' | 'inherit') => void;
  onAccentColorChange?: (accentColor: string) => void;
  onGrayColorChange?: (grayColor: string) => void;
  onPanelBackgroundChange?: (panelBackground: string) => void;
  onRadiusChange?: (radius: string) => void;
  onScalingChange?: (scaling: string) => void;
  children: React.ReactNode;
}

export const Theme = ({ 
  isRoot = true,
  hasBackground = false,

  appearanceProp = 'inherit',
  accentColorProp = 'default',
  grayColorProp = 'auto',
  panelBackgroundProp = 'solid',
  radiusProp = 'radius1',
  scalingProp = '100%',

  onAppearanceChange,
  onAccentColorChange,
  onGrayColorChange,
  onPanelBackgroundChange,
  onRadiusChange,
  onScalingChange,
  children,
}: ThemeProps) => {
  const [appearance, setAppearance] = useState(appearanceProp);
  const [accentColor, setAccentColor] = useState(accentColorProp);
  const [grayColor, setGrayColor] = useState(grayColorProp);
  const [panelBackground, setPanelBackground] = useState(panelBackgroundProp);
  const [radius, setRadius] = useState(radiusProp);
  const [scaling, setScaling] = useState(scalingProp);


  // Appearance 변경 핸들러
  const handleAppearanceChange = (newAppearance: 'light' | 'dark') => {
    setAppearance(newAppearance);
    if(onAppearanceChange) {
      onAppearanceChange(newAppearance);
    }
  };

  // Accent Color 변경 핸들러
  const handleAccentColorChange = (newAccentColor: string) => {
    setAccentColor(newAccentColor as ThemeProps['accentColorProp']);
    if(onAccentColorChange) {
      onAccentColorChange(newAccentColor);
    }
  };

  // Gray Color 변경 핸들러
  const handleGrayColorChange = (newGrayColor: string) => {
    setGrayColor(newGrayColor as ThemeProps['grayColorProp']);
    if(onGrayColorChange) {
      onGrayColorChange(newGrayColor);
    }
  };

  // Panel Background 변경 핸들러
  const handlePanelBackgroundChange = (newPanelBackground: string) => {
    setPanelBackground(newPanelBackground as ThemeProps['panelBackgroundProp']);
    if(onPanelBackgroundChange) {
      onPanelBackgroundChange(newPanelBackground);
    }
  };

  // Radius 변경 핸들러
  const handleRadiusChange = (newRadius: string) => {
    setRadius(newRadius as ThemeProps['radiusProp']);
    if(onRadiusChange) {
      onRadiusChange(newRadius);
    }
  };

  // Scaling 변경 핸들러
  const handleScalingChange = (newScaling: string) => {
    setScaling(newScaling as ThemeProps['scalingProp']);
    if(onScalingChange) {
      onScalingChange(newScaling);
    }
  };
    
  useEffect(() => {
    if (isRoot) {
      // 최상위 테마 설정: DOM의 클래스와 스타일 직접 조작
      const root = document.documentElement;
      root.classList.remove('light', 'dark');
      if (appearance !== 'inherit') {
        root.classList.add(appearance);
      }
    } else {
      // 내부 테마 설정: 이 컴포넌트 또는 자식 컴포넌트에 대한 스타일 조정
      // 여기서는 예시로, 실제 로직은 애플리케이션 요구 사항에 따라 달라질 수 있습니다.
    }
  }, [appearance, isRoot]);

  return (
    <ThemeContainer
      hasBackground={hasBackground}
      appearance={appearance}
      accentColor={accentColor}
      grayColor={grayColor}
      panelBackground={panelBackground}
      radius={radius}
      scaling={scaling}
    >
      {children}
    </ThemeContainer>
  )
}
