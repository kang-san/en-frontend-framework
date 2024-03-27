import { PropDef } from '../../../src/styles/types/prop-def';
import { ThemeProps, accentColors } from 'src/theme-provider';
import { RadiusValue } from '../../styles/types/radius.props';

const sizes = ['1', '2', '3', '4'] as const;
const variants = ['classic', 'solid', 'soft', 'surface', 'outline', 'ghost'] as const;


export type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size: PropDef<(typeof sizes)[number]>;
  variant: PropDef<(typeof variants)[number]>;
  colors: PropDef<(typeof accentColors)[number]>;
  highContrast: PropDef<boolean>;
  radius: PropDef<(typeof RadiusValue)[number]>;
};

export const baseButtonPropDefs: BaseButtonProps = {
  size: { 
    type: 'enum', 
    values: sizes, 
    default: '2' 
  },
  variant: { 
    type: 'enum', 
    values: variants, 
    default: 'solid' 
  },
  colors: { 
    type: 'enum', 
    values: accentColors, 
    default: 'indigo' 
  },
  highContrast: { 
    type: 'boolean', 
    default: false 
  },
  radius: { 
    type: 'enum', 
    values: RadiusValue, 
    default: 'medium'
  },
};