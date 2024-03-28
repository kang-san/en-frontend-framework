import { globalCss } from '@stitches/react';
import { useTheme } from '../theme-provider';
import { RadiusValue } from '../styles/types/radius.props';
import { ScalingValue } from '../styles/types/scaling.props';

const { themeState } = useTheme();

interface CalRadiusProp {
  dataRadius: typeof RadiusValue[number];
  dataScaling: typeof ScalingValue[number];
}

const dataRadius = themeState.dataRadius;
const dataScaling = themeState.dataScaling;

export const globalStyles = globalCss({
  ':root': {
    '--radius-1': ({ dataRadius, dataScaling }: CalRadiusProp) => `calc(3px * ${dataScaling} * ${getRadiusFactor(dataRadius)})`,
    '--radius-2': ({ dataRadius, dataScaling }: CalRadiusProp) => `calc(4px * ${dataScaling} * ${getRadiusFactor(dataRadius)})`,
    '--radius-3': ({ dataRadius, dataScaling }: CalRadiusProp) => `calc(6px * ${dataScaling} * ${getRadiusFactor(dataRadius)})`,
    '--radius-4': ({ dataRadius, dataScaling }: CalRadiusProp) => `calc(8px * ${dataScaling} * ${getRadiusFactor(dataRadius)})`,
    '--radius-5': ({ dataRadius, dataScaling }: CalRadiusProp) => `calc(12px * ${dataScaling} * ${getRadiusFactor(dataRadius)})`,
    '--radius-6': ({ dataRadius, dataScaling }: CalRadiusProp) => `calc(16px * ${dataScaling} * ${getRadiusFactor(dataRadius)})`,
  },
});

const getRadiusFactor = (dataRadius: typeof RadiusValue[number]) => {
  switch (dataRadius) {
    case 'none':
      return 0;
    case 'small':
      return 0.75;
    case 'medium':
      return 1;
    case 'large':
      return 1.5;
    case 'full':
      return 1.5;
  }
};

export default globalStyles;