import React from 'react';
import { styled } from '@stitches/react'

import { useTheme } from '../../theme-provider';

export const BaseButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { themeState } = useTheme();

  return <></>
}