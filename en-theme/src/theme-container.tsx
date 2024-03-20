import { styled } from '@stitches/react';
import { useTheme } from './theme-provider';
import { theme } from './themes';

interface ThemeContainerVariants {
  dataScaling?: {
    '90%': { '--scaling': string };
    '95%': { '--scaling': string };
    '100%': { '--scaling': string };
    '105%': { '--scaling': string };
    '110%': { '--scaling': string };
  };
  dataRadius?: {
    none: { '--radius-factor': string; '--radius-full': string; '--radius-thumb': string };
    small: { '--radius-factor': string; '--radius-full': string; '--radius-thumb': string };
    medium: { '--radius-factor': string; '--radius-full': string; '--radius-thumb': string };
    large: { '--radius-factor': string; '--radius-full': string; '--radius-thumb': string };
    full: { '--radius-factor': string; '--radius-full': string; '--radius-thumb': string };
  };
  // ... 다른 variant 속성들 ...
}

export const ThemeContainer = styled('div', {
  // variant tokens
  variants: {
    dataScaling: {
      '90%': {
        '--scaling': '0.9',
      },
      '95%': {
        '--scaling': '0.95',
      },
      '100%': {
        '--scaling': '1',
      },
      '105%': {
        '--scaling': '1.05',
      },
      '110%': {
        '--scaling': '1.1',
      },
    },
    dataRadius: {
      none: {
        '--radius-factor': '0',
        '--radius-full': '0px',
        '--radius-thumb': '0.5px',
      },
      small: {
        '--radius-factor': '0.75',
        '--radius-full': '0px',
        '--radius-thumb': '0.5px',
      },
      medium: {
        '--radius-factor': '1',
        '--radius-full': '0px',
        '--radius-thumb': '9999px',
      },
      large: {
        '--radius-factor': '1.5',
        '--radius-full': '0px',
        '--radius-thumb': '9999px',
      },
      full: {
        '--radius-factor': '1.5',
        '--radius-full': '9999px',
        '--radius-thumb': '9999px',
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
});

// 수정된 부분
type DataRadiusVariant = keyof ThemeContainerVariants['dataRadius'];
type DataScalingVariant = keyof ThemeContainerVariants['dataScaling'];

export const ThemedContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { themeState } = useTheme();

  const dataRadiusVariant = themeState.dataRadius as DataRadiusVariant;
  const dataScalingVariant = themeState.dataScaling as DataScalingVariant;

  return (
    <ThemeContainer
      dataRadius={{
        [dataRadiusVariant]: themeState.dataRadius?.[dataRadiusVariant],
      }}
      dataScaling={{
        [dataScalingVariant]: themeState.dataScaling?.[dataScalingVariant],
      }}
    >
      {children}
    </ThemeContainer>
  );
};