import React from 'react';

type BooleanPropDef = {
  type: 'boolean';
  default: boolean;
  required?: boolean;
};

type StringPropDef = {
  type: 'string';
  default: string;
  required?: boolean;
};

type StringOrNumberPropDef = {
  type: 'string | number';
  default: string | number;
  required?: boolean;
};

type ReactNodePropDef = {
  type: 'ReactNode';
  default: React.ReactNode;
  required?: boolean;
};

type EnumPropDef<T> = { 
  type: 'enum'; 
  values: readonly T[]; 
  default: T; 
  required?: boolean 
};


type PropDef<T = any> =
  | BooleanPropDef
  | StringPropDef
  | StringOrNumberPropDef
  | ReactNodePropDef
  | EnumPropDef<T>;

export type { PropDef };

// export interface PropDef<T> {
//   type: 'boolean' | 'string' | 'enum' | 'ReactNode' | 'string | number';
//   default?: T;
//   values?: T[];
//   required?: boolean;
// }