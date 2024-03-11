import { styled } from '@stitches/react';
import { grass, gray, indigo } from './primitive-color';
import { tomato, mauve, slate, purple, violet, jade, yellow } from './primitive-color/light';
import { translucent } from './styles/tokens/colors';
import { theme } from './themes';



export const ThemeContainer = styled('div', {

  // variant tokens
  variants: {
    hasBackground: {
      true: {
        background: theme.colors.colorBackground, 
      },
      false: {
        background: 'none',
      },
    },
    accentColor: {
      tomato: {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      red: {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      ruby: {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      crimson: {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      pink: {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      plum: {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      purple: {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      violet: {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },  
      iris: {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      indigo: {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      blue: {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      cyan: {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      teal: {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      jade: {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      green: {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      grass: {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      orange: {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      brown: {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      sky: {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      mint: {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      lime: {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      yellow: {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      amber: {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      gold: {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      bronze: {
        autoFillRoot: theme.colors.accent3,
        focusRoot: theme.colors.accent8,
        selectionRoot: theme.colors.accentA5,
        selection: {
          backgroundColor: theme.colors.accentA5,
        }
      },
      gray: {},
    },
    panelBackground: {
      solid: {
        panel: theme.colors.colorPanelSolid,
      },
      translucent: {
        panel: theme.colors.colorPanelTranslucent,
      },
    },
  },
})