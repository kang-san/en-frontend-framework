import { PropDef } from "../../styles/types/prop-def";

const sizes = ['1', '2'] as const;
const variants = ['solid', 'soft', 'surface', 'outline'] as const;

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  size: PropDef<(typeof sizes)[number]>;
  variant: PropDef<(typeof variants)[number]>;
}

export const badgePropDefs: BadgeProps = {
  size: {
    type: 'enum',
    values: sizes,
    default: '1',
  },
  variant: {
    type: 'enum',
    values: variants,
    default: 'outline',
  },
}