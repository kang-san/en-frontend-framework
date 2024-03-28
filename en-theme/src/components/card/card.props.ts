import React from 'react';

import { PropDef } from "../../styles/types/prop-def";

const sizes =  ['1', '2', '3', '4', '5'] as const;
const variants = ['surface', 'classic', 'ghost'] as const;

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  size: PropDef<(typeof sizes)[number]>;
  variant: PropDef<(typeof variants)[number]>;
}

export const cardPropDefs: CardProps = {
  size: {
    type: 'enum',
    values: sizes,
    default: '1',
  },
  variant: {
    type: 'enum',
    values: variants,
    default: 'surface'
  },
}