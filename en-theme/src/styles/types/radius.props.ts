// theme.types.ts

export const RadiusValue = ['none' , 'small' , 'medium' , 'large' , 'full'] as const;

export interface RadiusProps {
  [key: string]: {
    '--radius-factor': number;
    '--radius-full': string;
    '--radius-thumb': string;
  };
}

export interface DataRadiusProps extends RadiusProps {
  none: {
    '--radius-factor': number;
    '--radius-full': string;
    '--radius-thumb': string;
  };
  small: {
    '--radius-factor': number;
    '--radius-full': string;
    '--radius-thumb': string;
  };
  medium: {
    '--radius-factor': number;
    '--radius-full': string;
    '--radius-thumb': string;
  };
  large: {
    '--radius-factor': number;
    '--radius-full': string;
    '--radius-thumb': string;
  };
  full: {
    '--radius-factor': number;
    '--radius-full': string;
    '--radius-thumb': string;
  };
}