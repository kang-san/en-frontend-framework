import React from 'react';

type BooleanPropDef = { type: 'boolean'; default?: boolean; required?: boolean };
type StringPropDef = { type: 'string'; default?: string; required?: boolean };
type StringOrNumberPropDef = {
  type: 'string | number';
  default?: string | number;
  required?: boolean;
};
type ReactNodePropDef = { type: 'ReactNode'; default?: React.ReactNode; required?: boolean };
type EnumPropDef<T> = { type: 'enum'; values: readonly T[]; default?: T; required?: boolean };

type RegularPropDef<T> =
  | BooleanPropDef
  | StringPropDef
  | StringOrNumberPropDef
  | ReactNodePropDef
  | EnumPropDef<T>;
type ResponsivePropDef<T = any> = RegularPropDef<T> & { responsive: true };
type PropDef<T = any> = RegularPropDef<T> | ResponsivePropDef<T>;


export type { PropDef };
