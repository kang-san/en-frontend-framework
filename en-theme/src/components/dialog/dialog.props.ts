import React from 'react';

import { PropDef } from "../../styles/types/prop-def";

const sizes = ['1', '2', '3', '4'] as const;

export type DialogProps = React.HTMLAttributes<HTMLElement> & {
  size: PropDef<(typeof sizes)[number]>
}

export const dialogPropDefs: DialogProps = {
  size: {
    type: 'enum',
    values: sizes,
    default: '1',
  }
}