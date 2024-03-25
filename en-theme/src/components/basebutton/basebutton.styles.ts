import { styled } from '@stitches/react';

// .rt-BaseButton:where(:not(.rt-variant-ghost))와 .rt-BaseButton:where(.rt-variant-ghost)에 대한 스타일 정의가 없습니다.


export const BaseButton = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  flexShrink: 0,
  userSelect: 'none',
  verticalAlign: 'top',

  // 기본 스타일 정의
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  
  // 마진 속성 정의
  margin: '0',
  marginTop: '10px',
  marginRight: '20px',
  marginBottom: '10px',
  marginLeft: '20px',


  variants: {
    variant: {
      classic: {
        backgroundColor: '$accent9',
        color: '$accent9Contrast',
        position: 'relative',
        zIndex: 0,
        backgroundImage: 'linear-gradient(to bottom, transparent 50%, $grayA4), linear-gradient(to bottom, transparent 50%, $accent9 80%)',
        boxShadow: '$classicTopShadow, inset 0 0 0 1px $accent9, $classicBottomShadow',
        height: '--var(base-button-height)',

        '&::after': {
          content: '""',
          position: 'absolute',
          borderRadius: 'inherit',
          pointerEvents: 'none',
          inset: 0,
          zIndex: -1,
          border: '$classicAfterInset solid transparent',
          backgroundClip: 'content-box',
          backgroundColor: 'inherit',
          backgroundImage: 'linear-gradient($blackA1, transparent, $whiteA2)',
          boxShadow: 'inset 0 2px 3px -1px $whiteA4',
        },

        '&:focus-visible': {
          outline: '2px solid $colorFocusRoot',
          outlineOffset: '2px',
        },

        '@hover': {
          '&:hover': {
            '&::after': {
              backgroundColor: '$accent10',
              backgroundImage: 'linear-gradient($blackA2 -15%, transparent, $whiteA3)',
            },
          },
        },

        '&[data-state="open"]': {
          '&::after': {
            backgroundColor: '$accent10',
            backgroundImage: 'linear-gradient($blackA2 -15%, transparent, $whiteA3)',
          },
        },

        '&:active:not(&[data-state="open"], &[data-disabled])': {
          backgroundColor: '$accent9',
          backgroundImage: 'linear-gradient($blackA1, transparent)',
          paddingTop: 'var(--base-button-classic-active-padding-top)',
          boxShadow: '$classicActiveShadowFront, inset 0 0 0 1px $accent9, $classicActiveShadowBottom',
          
          '&::after': {
            boxShadow: 'none',
            backgroundColor: 'inherit',
            backgroundImage: 'linear-gradient($blackA2, transparent, $whiteA3)',
          },
        },

        '&[data-disabled]': {
          cursor: '$disabled',
          color: '$grayA8',
          backgroundColor: '$gray2',
          backgroundImage: 'none',
          boxShadow: '$classicDisabledShadow',
          filter: 'none',
          
          '&::after': {
            boxShadow: 'none',
            backgroundColor: '$grayA2',
            backgroundImage: 'linear-gradient($blackA1 -20%, transparent, $whiteA1)',
          },
        },

        '&.high-contrast': {
          backgroundColor: '$accent12',
          color: '$gray1',
          backgroundImage: 'linear-gradient(to bottom, transparent 50%, $grayA4), linear-gradient(to bottom, transparent 50%, $accent12 80%)',
          boxShadow: '$classicTopShadow, inset 0 0 0 1px $accent12, $classicBottomShadow',

          '&::after': {
            backgroundImage: 'linear-gradient($blackA3, transparent, $whiteA2)',
          },

          '@hover': {
            '&:hover': {
              filter: '$classicHighContrastHoverFilter',
              '&::after': {
                backgroundColor: '$accent12',
                backgroundImage: 'linear-gradient($blackA5, transparent, $whiteA2)',
              },
            },
          },

          '&[data-state="open"]': {
            filter: '$classicHighContrastHoverFilter',
            '&::after': {
              backgroundColor: '$accent12',
              backgroundImage: 'linear-gradient($blackA5, transparent, $whiteA2)',  
            },
          },

          '&:active:not(&[data-state="open"])': {
            backgroundColor: '$accent12', 
            filter: '$classicHighContrastActiveFilter',
            boxShadow: '$classicActiveShadowFront, inset 0 0 0 1px $accent12, $classicActiveShadowBottom',

            '&::after': {
              backgroundImage: 'linear-gradient($blackA5, transparent, $whiteA3)',
            },
          },
        },
      },

      solid: {
        backgroundColor: '$accent9',
        color: '$accent9Contrast',
        height: '--var(--base-button-height)',

        '@hover': {
          '&:hover': {
            backgroundColor: '$accent10',
          },
        },

        '&[data-state="open"]': {
          backgroundColor: '$accent10',
        },

        '&:active:not(&[data-state="open"])': {
          backgroundColor: '$accent10',
          filter: '$solidActiveFilter',
        },

        '&:focus-visible': {
          outline: '2px solid $colorFocusRoot',
          outlineOffset: '2px',
        },

        '&[data-disabled]': {
          cursor: '$disabled',
          color: '$grayA8',
          backgroundColor: '$grayA3',
          filter: 'none',
        },

        '&.high-contrast': {
          backgroundColor: '$accent12',
          color: '$gray1',

          '@hover': {
            '&:hover': {
              backgroundColor: '$accent12',
              filter: '$solidHighContrastHoverFilter',
            },
          },

          '&[data-state="open"]': {
            backgroundColor: '$accent12',
            filter: '$solidHighContrastHoverFilter',
          },

          '&:active:not(&[data-state="open"])': {
            backgroundColor: '$accent12',
            filter: '$solidHighContrastActiveFilter',
          },
        },
      },

      soft: {
        backgroundColor: '$accentA3',
        color: '$accentA11',
        height: '--var(base-button-height)',

        '&:focus-visible': {
          outline: '2px solid $accent8',
          outlineOffset: '-1px',
        },

        '@hover': {
          '&:hover': {
            backgroundColor: '$accentA4',
          },
        },

        '&[data-state="open"]': {
          backgroundColor: '$accentA4',
        },

        '&:active:not(&[data-state="open"])': {
          backgroundColor: '$accentA5',
        },

        '&[data-disabled]': {
          cursor: '$disabled',
          color: '$grayA8',
          backgroundColor: '$grayA3',
        },

        '&.high-contrast': {
          color: '$accent12',
        },
      },

      ghost: {
        color: '$accentA11',
        height: 'fit-content',
        boxSizing: 'content-box',

        '@hover': {
          '&:hover': {
            backgroundColor: '$accentA3',
          },
        },

        '&:focus-visible': {
          outline: '2px solid $colorFocusRoot',
          outlineOffset: '-1px',
        },

        '&[data-state="open"]': {
          backgroundColor: '$accentA3',
        },

        '&:active:not(&[data-state="open"])': {
          backgroundColor: '$accentA4',
        },

        '&[data-disabled]': {
          cursor: '$disabled',
          color: '$grayA8',
          backgroundColor: 'transparent',
        },

        '&.high-contrast': {
          color: '$accent12',
        },
      },

      outline: {
        boxShadow: 'inset 0 0 0 1px $accentA8',
        color: '$accentA11',
        height: '--var(base-button-height)',

        '@hover': {
          '&:hover': {
            backgroundColor: '$accentA2',
          },
        },

        '&[data-state="open"]': {
          backgroundColor: '$accentA2',
        },

        '&:active:not(&[data-state="open"])': {
          backgroundColor: '$accentA3',
        },

        '&:focus-visible': {
          outline: '2px solid $colorFocusRoot',
          outlineOffset: '-1px',
        },

        '&[data-disabled]': {
          cursor: '$disabled',
          color: '$grayA8',
          boxShadow: 'inset 0 0 0 1px $grayA7',
          backgroundColor: 'transparent',
        },

        '&.high-contrast': {
          boxShadow: 'inset 0 0 0 1px $accentA7, inset 0 0 0 1px $grayA11',
          color: '$accent12',
        },
      },

      surface: {
        backgroundColor: '$colorSurfaceAccent',
        boxShadow: 'inset 0 0 0 1px $accentA7',
        color: '$accentA11',
        height: '--var(base-button-height)',

        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px $accentA8',
          },
        },

        '&[data-state="open"]': {
          boxShadow: 'inset 0 0 0 1px $accentA8',
        },

        '&:active:not(&[data-state="open"])': {
          backgroundColor: '$accentA3',
          boxShadow: 'inset 0 0 0 1px $accentA8',
        },

        '&:focus-visible': {
          outline: '2px solid $colorFocusRoot',
          outlineOffset: '-1px',
        },

        '&[data-disabled]': {
          cursor: '$disabled',
          color: '$grayA8',
          boxShadow: 'inset 0 0 0 1px $grayA6',
          backgroundColor: '$grayA2',
        },

        '&.high-contrast': {
          color: '$accent12',
        },
      },
    },

    size: {
      1: {
        '--base-button-classic-active-padding-top': '1px',
        '--base-button-height': '$space5',
        borderRadius: 'max($radii$1, $radii$full)',
        width: '30px',
        height: '30px',
        margin: '0',
        marginTop: '5px',
        marginRight: '10px',
        marginBottom: '5px',
        marginLeft: '10px',
      },
      2: {
        '--base-button-classic-active-padding-top': '2px',
        '--base-button-height': '$space6',
        borderRadius: 'max($radii$2, $radii$full)',
        width: '40px',
        height: '40px',
        margin: '0',
        marginTop: '10px',
        marginRight: '15px',
        marginBottom: '10px',
        marginLeft: '15px',
      },
      3: {
        '--base-button-classic-active-padding-top': '2px',
        '--base-button-height': '$space7',
        borderRadius: 'max($radii$3, $radii$full)',
        width: '50px',
        height: '50px',
        margin: '0',
        marginTop: '15px',
        marginRight: '20px',
        marginBottom: '15px',
        marginLeft: '20px',
      },
      4: {
        '--base-button-classic-active-padding-top': '2px',
        '--base-button-height': '$space8',
        borderRadius: 'max($radii$4, $radii$full)',
        width: '60px',
        height: '60px',
        margin: '0',
        marginTop: '20px',
        marginRight: '25px',
        marginBottom: '20px',
        marginLeft: '25px',
      },
    },
  },

  defaultVariants: {
    variant: 'classic',
    size: '2',
  },

  theme: {
    light: {
      classicAfterInset: '2px',
      classicTopShadow: 'inset 0 0 0 1px $grayA4, inset 0 -2px 1px $grayA3',
      classicBottomShadow: 'inset 0 4px 2px -2px $whiteA9, inset 0 2px 1px -1px $whiteA9',
      classicDisabledShadow: '$classicTopShadow, $classicBottomShadow',
      classicActiveFilter: 'brightness(0.92) saturate(1.1)',
      classicHighContrastHoverFilter: 'contrast(0.88) saturate(1.1) brightness(1.1)',
      classicHighContrastActiveFilter: 'contrast(0.82) saturate(1.2) brightness(1.16)',
      solidActiveFilter: 'brightness(0.92) saturate(1.1)',
      solidHighContrastHoverFilter: 'contrast(0.88) saturate(1.1) brightness(1.1)',
      solidHighContrastActiveFilter: 'contrast(0.82) saturate(1.2) brightness(1.16)',
    },
    dark: {
      classicAfterInset: '1px',  
      classicTopShadow: 'inset 0 0 0 1px $whiteA2, inset 0 4px 2px -2px $whiteA3, inset 0 1px 1px $whiteA6, inset 0 -1px 1px $blackA6',
      classicBottomShadow: '0 0 transparent',
      classicDisabledShadow: 'inset 0 0 0 1px $grayA5, inset 0 4px 2px -2px $grayA2, inset 0 1px 1px $grayA5, inset 0 -1px 1px $blackA3, inset 0 0 0 1px $grayA2',
      classicActiveFilter: 'brightness(1.08)',
      classicHighContrastHoverFilter: 'contrast(0.88) saturate(1.3) brightness(1.14)', 
      classicHighContrastActiveFilter: 'brightness(0.95) saturate(1.2)',
      solidActiveFilter: 'brightness(1.08)',
      solidHighContrastHoverFilter: 'contrast(0.88) saturate(1.3) brightness(1.18)',
      solidHighContrastActiveFilter: 'brightness(0.95) saturate(1.2)',
    },
  },
});