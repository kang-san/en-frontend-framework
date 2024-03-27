import {  } from '../../theme';

const colorProp = {
  type: 'enum',
  values: ThemeProps.accentColor.values,
  default: undefined as (typeof ThemeProps.accentColor.values)[number] | undefined,
} satisfies PropDef<(typeof ThemeProps.accentColor.values)[number]>;


export { colorProp };