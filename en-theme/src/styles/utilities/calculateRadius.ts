// utils/calculate-radius.ts
import { ThemeProps } from '../../theme-provider';
import { BaseButtonProps } from '../../components/basebutton';

const radiusBaseFactors = [3, 4, 6, 8, 12, 16];

export const calculateRadius = (
  dataScaling: ThemeProps['dataScaling'],
  radius: BaseButtonProps['radius']
) => {

  //radius에 따라 SWITCH case로 none, small = 4, m

};