import { styled } from '@stitches/react';
import { grass, gray, indigo } from './primitive-color';
import { tomato, mauve, slate, purple, violet, jade, yellow } from './primitive-color/light';
import { translucent } from './styles/tokens/colors';
import { theme } from './themes';
import { radiiCal } from './styles';


export const ThemeContainer = styled('div', {
  boarderRadius: {
    'radii1': theme.radii.radii1,
    'radii2': theme.radii.radii2,
    'radii3': theme.radii.radii3,
    'radii4': theme.radii.radii4,
    'radii5': theme.radii.radii5,
    'radii6': theme.radii.radii6,
  },
  // variant tokens
  variants: {
  
    dataScaling: {
      '90%': { scaling: 0.9},
      '95%': { scaling: 0.95},
      '100%': { scaling: 1},
      '105%': { scaling: 1.05},
      '110%': { scaling: 1.1},
    },
    dataRadius: {
      'none': {
        radiusFactor: 0,
        radiusFull: 0,
        radiusThumb: 0.5,
      },
      'small': {
        radiusFactor: 0.5,
        radiusFull: 0.5,
        radiusThumb: 0.5,
      },
      'medium': {
        radiusFactor: 1,
        radiusFull: 1,
        radiusThumb: 1,
      },
      'large': {
        radiusFactor: 2,
        radiusFull: 2,
        radiusThumb: 2,
      },
      'full': {
        radiusFactor: 9999,
        radiusFull: 9999,
        radiusThumb: 9999,
      },
    },
    hasBackground: {
      true: {
        background: theme.colors.colorBackground, 
      },
      false: {
        background: 'none',
      },
    },
    appearance: {
      'inherit': {},
      'light': {
      },
      'dark': {
      },
    },
    grayColor: {
      'mauve': {
      },
      'slate': {
      },
      'sage': {
      },
      'olive': {
      },
      'sand': {
      },
      'gray': {
      },
      'auto': {
      },
    },
    accentColor: {
      'tomato': {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      'red': {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      'ruby': {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      'crimson': {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      'pink': {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      'plum': {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      'purple': {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      'violet': {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },  
      'iris': {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      'indigo': {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      'blue': {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      'cyan': {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      'teal': {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      'jade': {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      'green': {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      'grass': {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      'orange': {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      'brown': {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      'sky': {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      'mint': {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      'lime': {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      'yellow': {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      'amber': {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      'gold': {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      'bronze': {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      'gray': {},
    },
    panelBackground: {
      'solid': {
        panel: theme.colors.colorPanelSolid,
      },
      'translucent': {
        panel: theme.colors.colorPanelTranslucent,
      },
    },
  },
})