import React from 'react';

import { PropDef } from '../../styles/types/prop-def';
import { accentColors } from 'src/theme-provider';
import { RadiusValue } from '../../styles/types/radius.props';


const sizes = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;
const variants = ['solid', 'soft'] as const;

export type AvatarProps = React.HTMLAttributes<HTMLElement> & {
  size: PropDef<(typeof sizes)[number]>;
  variant: PropDef<(typeof variants)[number]>;
  colors: PropDef<(typeof accentColors)[number]>;
  highContrast: PropDef<boolean>;
  radius: PropDef<(typeof RadiusValue)[number]>;
  fallback: PropDef<React.ReactNode>;
}

export const avatarPropDefs: AvatarProps = {
  size: {
    type: 'enum',
    values: sizes,
    default: '1',
  },
  variant: {
    type: 'enum',
    values: variants,
    default: 'solid',
  },
  colors: {
    type: 'enum',
    values: accentColors,
    default: 'indigo',
  },
  highContrast: {
    type: 'boolean',
    default: false,
  },
  radius: {
    type: 'enum',
    values: RadiusValue,
    default: 'medium',
  },
  fallback: {
    type: 'ReactNode',
    default: undefined,
    required: false,
  },
}