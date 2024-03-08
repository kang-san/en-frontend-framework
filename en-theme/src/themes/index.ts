import { createStitches } from '@stitches/react';
import { fonts } from '../styles/fonts';
import { lightColor, darkColor, whiteA, blackA, contrast, surface, translucent } from '../styles/tokens/colors';
import { radiiNone, radiiSmall, radiiMedium, radiiLarge, radiiFull } from 'src/styles/tokens/radii';

// P3 색상과 미디어 쿼리 지원 여부를 검사하는 함수 >> util에 이동 예정
// Display P3 색상과 @media (color-gamut: p3) 지원 여부 확인
const supportsP3ColorAndMediaQuery = () => {
  if (typeof window !== "undefined") {
    const p3ColorSupported = CSS.supports('color', 'color(display-p3 1 1 1)');
    const mediaQuerySupported = window.matchMedia('(color-gamut: p3)').matches;
    return p3ColorSupported && mediaQuerySupported;
  }
  return false;
};
const useP3Colors = supportsP3ColorAndMediaQuery();


export const { styled, theme, globalCss, keyframes, createTheme } = createStitches({
  theme: {
    colors: {
      color: lightColor.gray12,

      //contrast color
      tomato9Contrast: contrast.tomato9Contrast,
      red9Contrast: contrast.red9Contrast,
      ruby9Contrast: contrast.ruby9Contrast,
      crimson9Contrast: contrast.crimson9Contrast,
      pink9Contrast: contrast.pink9Contrast,
      plum9Contrast: contrast.plum9Contrast,
      purple9Contrast: contrast.purple9Contrast,
      violet9Contrast: contrast.violet9Contrast,
      iris9Contrast: contrast.iris9Contrast,
      indigo9Contrast: contrast.indigo9Contrast,
      blue9Contrast: contrast.blue9Contrast,
      cyan9Contrast: contrast.cyan9Contrast,
      teal9Contrast: contrast.teal9Contrast,
      jade9Contrast: contrast.jade9Contrast,
      green9Contrast: contrast.green9Contrast,
      grass9Contrast: contrast.grass9Contrast,
      orange9Contrast: contrast.orange9Contrast,
      brown9Contrast: contrast.brown9Contrast,
      sky9Contrast: contrast.sky9Contrast,
      mint9Contrast: contrast.mint9Contrast,
      lime9Contrast: contrast.lime9Contrast,
      yellow9Contrast: contrast.yellow9Contrast,
      amber9Contrast: contrast.amber9Contrast,
      gold9Contrast: contrast.gold9Contrast,
      bronze9Contrast: contrast.bronze9Contrast,
      gray9Contrast: contrast.gray9Contrast,
      //transparency

      /////surface color & P3 surface color
      graySurface: useP3Colors ? 'color(display-p3 1 1 1 / 0.8)' : '#ffffffcc',
      mauveSurface: useP3Colors ? 'color(display-p3 1 1 1 / 0.8)' : '#ffffffcc',
      slateSurface: useP3Colors ? 'color(display-p3 1 1 1 / 0.8)' : '#ffffffcc',
      sageSurface: useP3Colors ? 'color(display-p3 1 1 1 / 0.8)' : '#ffffffcc',
      oliveSurface: useP3Colors ? 'color(display-p3 1 1 1 / 0.8)' : '#ffffffcc',
      sandSurface: useP3Colors ? 'color(display-p3 1 1 1 / 0.8)' : '#ffffffcc',
      tomatoSurface: useP3Colors ? 'color(display-p3 0.9922 0.9647 0.9608 / 0.8)' : '#fff6f5cc',
      redSurface: useP3Colors ? 'color(display-p3 0.9961 0.9647 0.9647 / 0.8)' : '#fff5f5cc',
      rubySurface: useP3Colors ? 'color(display-p3 0.9961 0.9647 0.9647 / 0.8)' : '#fff5f6cc',
      crimsonSurface: useP3Colors ? 'color(display-p3 0.9922 0.9608 0.9725 / 0.8)' : '#fef5f8cc',
      pinkSurface: useP3Colors ? 'color(display-p3 0.9922 0.9608 0.9804 / 0.8)' : '#fef5facc',
      plumSurface: useP3Colors ? 'color(display-p3 0.9843 0.9647 0.9843 / 0.8)' : '#fdf5fdcc',
      purpleSurface: useP3Colors ? 'color(display-p3 0.9804 0.9647 0.9922 / 0.8)' : '#faf5fecc',
      violetSurface: useP3Colors ? 'color(display-p3 0.9725 0.9647 0.9961 / 0.8)' : '#f9f6ffcc',
      irisSurface: useP3Colors ? 'color(display-p3 0.9647 0.9647 0.9961 / 0.8)' : '#f6f6ffcc',
      indigoSurface: useP3Colors ? 'color(display-p3 0.9647 0.9725 0.9961 / 0.8)' : '#f5f8ffcc',
      blueSurface: useP3Colors ? 'color(display-p3 0.9529 0.9765 0.9961 / 0.8)' : '#f1f9ffcc',
      cyanSurface: useP3Colors ? 'color(display-p3 0.9412 0.9765 0.9804 / 0.8)' : '#eff9facc',
      tealSurface: useP3Colors ? 'color(display-p3 0.9451 0.9804 0.9725 / 0.8)' : '#f0faf8cc',
      jadeSurface: useP3Colors ? 'color(display-p3 0.9529 0.9804 0.9608 / 0.8)' : '#f1faf5cc',
      greenSurface: useP3Colors ? 'color(display-p3 0.9569 0.9804 0.9608 / 0.8)' : '#f1faf4cc',
      grassSurface: useP3Colors ? 'color(display-p3 0.9569 0.9804 0.9569 / 0.8)' : '#f3faf3cc',
      brownSurface: useP3Colors ? 'color(display-p3 0.9843 0.9725 0.9569 / 0.8)' : '#fbf8f4cc',
      bronzeSurface: useP3Colors ? 'color(display-p3 0.9843 0.9608 0.9529 / 0.8)' : '#fdf5f3cc',
      goldSurface: useP3Colors ? 'color(display-p3 0.9765 0.9725 0.9412 / 0.8)' : '#f9f8efcc',
      skySurface: useP3Colors ? 'color(display-p3 0.9412 0.9765 0.9843 / 0.8)' : '#eef9fdcc',
      mintSurface: useP3Colors ? 'color(display-p3 0.9451 0.9804 0.9725 / 0.8)' : '#effaf8cc',
      limeSurface: useP3Colors ? 'color(display-p3 0.9725 0.9765 0.9412 / 0.8)' : '#f6f9f0cc',
      yellowSurface: useP3Colors ? 'color(display-p3 0.9961 0.9922 0.902 / 0.8)' : '#fefbe4cc',
      amberSurface: useP3Colors ? 'color(display-p3 0.9922 0.9843 0.902 / 0.8)' : '#fefae4cc',
      orangeSurface: useP3Colors ? 'color(display-p3 0.9961 0.9608 0.9176 / 0.8)' : '#fff5e9cc',
      
      //transperant color
      transparent: useP3Colors ? 'color(display-p3 0 0 0 / 0)' : 'rgb(0 0 0 / 0',


      //////accent color theme를 위한 BASE
      //tomato
      colorSurfaceAccent: surface.tomatoSurface,

      accent1: lightColor.tomato1,
      accent2: lightColor.tomato2,
      accent3: lightColor.tomato3,
      accent4: lightColor.tomato4,
      accent5: lightColor.tomato5,
      accent6: lightColor.tomato6,
      accent7: lightColor.tomato7,
      accent8: lightColor.tomato8,
      accent9: lightColor.tomato9,
      accent9Contrast: contrast.tomato9Contrast,
      accent10: lightColor.tomato10,
      accent11: lightColor.tomato11,
      accent12: lightColor.tomato12,
  
      accentA1: lightColor.tomatoA1,
      accentA2: lightColor.tomatoA2,
      accentA3: lightColor.tomatoA3,
      accentA4: lightColor.tomatoA4,
      accentA5: lightColor.tomatoA5,
      accentA6: lightColor.tomatoA6,
      accentA7: lightColor.tomatoA7,
      accentA8: lightColor.tomatoA8,
      accentA9: lightColor.tomatoA9,
      accentA10: lightColor.tomatoA10,
      accentA11: lightColor.tomatoA11,
      accentA12: lightColor.tomatoA12,

      /////gray color theme를 위한 BASE
      gray1: lightColor.mauve1,
      gray2: lightColor.mauve2,
      gray3: lightColor.mauve3,
      gray4: lightColor.mauve4,
      gray5: lightColor.mauve5,
      gray6: lightColor.mauve6,
      gray7: lightColor.mauve7,
      gray8: lightColor.mauve8,
      gray9: lightColor.mauve9,
      gray10: lightColor.mauve10,
      gray11: lightColor.mauve11,
      gray12: lightColor.mauve12,
      
      grayA1: lightColor.mauveA1,
      grayA2: lightColor.mauveA2,
      grayA3: lightColor.mauveA3,
      grayA4: lightColor.mauveA4,
      grayA5: lightColor.mauveA5,
      grayA6: lightColor.mauveA6,
      grayA7: lightColor.mauveA7,
      grayA8: lightColor.mauveA8,
      grayA9: lightColor.mauveA9,
      grayA10: lightColor.mauveA10,
      grayA11: lightColor.mauveA11,
      grayA12: lightColor.mauveA12,
        
  
      //Focus, selection, and autofill 
  
      //semantic color
      colorBackground: whiteA.whiteA1,
      colorOverlay: blackA.blackA6,
      colorPanelSolid: whiteA.whiteA1,
      colorPanelTraslucent: whiteA.whiteA8,
      colorSurface: whiteA.whiteA9,

    }
  }
})
const tomato = createTheme('accent-tomato', {
  colors: {
    colorSurfaceAccent: surface.tomatoSurface,

    accent1: lightColor.tomato1,
    accent2: lightColor.tomato2,
    accent3: lightColor.tomato3,
    accent4: lightColor.tomato4,
    accent5: lightColor.tomato5,
    accent6: lightColor.tomato6,
    accent7: lightColor.tomato7,
    accent8: lightColor.tomato8,
    accent9: lightColor.tomato9,
    accent9Contrast: contrast.tomato9Contrast,
    accent10: lightColor.tomato10,
    accent11: lightColor.tomato11,
    accent12: lightColor.tomato12,

    accentA1: lightColor.tomatoA1,
    accentA2: lightColor.tomatoA2,
    accentA3: lightColor.tomatoA3,
    accentA4: lightColor.tomatoA4,
    accentA5: lightColor.tomatoA5,
    accentA6: lightColor.tomatoA6,
    accentA7: lightColor.tomatoA7,
    accentA8: lightColor.tomatoA8,
    accentA9: lightColor.tomatoA9,
    accentA10: lightColor.tomatoA10,
    accentA11: lightColor.tomatoA11,
    accentA12: lightColor.tomatoA12,
  }
});

const red = createTheme('accent-red', {
  colors: {
    colorSurfaceAccent: surface.redSurface,

    accent1: lightColor.red1,
    accent2: lightColor.red2,
    accent3: lightColor.red3,
    accent4: lightColor.red4,
    accent5: lightColor.red5,
    accent6: lightColor.red6,
    accent7: lightColor.red7,
    accent8: lightColor.red8,
    accent9: lightColor.red9,
    accent9Contrast: contrast.red9Contrast,
    accent10: lightColor.red10,
    accent11: lightColor.red11,
    accent12: lightColor.red12,
  
    accentA1: lightColor.redA1,
    accentA2: lightColor.redA2,
    accentA3: lightColor.redA3,
    accentA4: lightColor.redA4,
    accentA5: lightColor.redA5,
    accentA6: lightColor.redA6,
    accentA7: lightColor.redA7,
    accentA8: lightColor.redA8,
    accentA9: lightColor.redA9,
    accentA10: lightColor.redA10,
    accentA11: lightColor.redA11,
    accentA12: lightColor.redA12,
  }
})

const ruby = createTheme('accent-ruby', {
  colors: {
    colorSurfaceAccent: surface.rubySurface,

    accent1: lightColor.ruby1,
    accent2: lightColor.ruby2,
    accent3: lightColor.ruby3,
    accent4: lightColor.ruby4,
    accent5: lightColor.ruby5,
    accent6: lightColor.ruby6,
    accent7: lightColor.ruby7,
    accent8: lightColor.ruby8,
    accent9: lightColor.ruby9,
    accent9Contrast: contrast.ruby9Contrast,
    accent10: lightColor.ruby10,
    accent11: lightColor.ruby11,
    accent12: lightColor.ruby12,
  
    accentA1: lightColor.rubyA1,
    accentA2: lightColor.rubyA2,
    accentA3: lightColor.rubyA3,
    accentA4: lightColor.rubyA4,
    accentA5: lightColor.rubyA5,
    accentA6: lightColor.rubyA6,
    accentA7: lightColor.rubyA7,
    accentA8: lightColor.rubyA8,
    accentA9: lightColor.rubyA9,
    accentA10: lightColor.rubyA10,
    accentA11: lightColor.rubyA11,
    accentA12: lightColor.rubyA12,
  }
})

const crimson = createTheme('accent-crimson', {
  colors: {
    colorSurfaceAccent: surface.crimsonSurface,

    accent1: lightColor.crimson1,
    accent2: lightColor.crimson2,
    accent3: lightColor.crimson3,
    accent4: lightColor.crimson4,
    accent5: lightColor.crimson5,
    accent6: lightColor.crimson6,
    accent7: lightColor.crimson7,
    accent8: lightColor.crimson8,
    accent9: lightColor.crimson9,
    accent9Contrast: contrast.crimson9Contrast,
    accent10: lightColor.crimson10,
    accent11: lightColor.crimson11,
    accent12: lightColor.crimson12,
  
    accentA1: lightColor.crimsonA1,
    accentA2: lightColor.crimsonA2,
    accentA3: lightColor.crimsonA3,
    accentA4: lightColor.crimsonA4,
    accentA5: lightColor.crimsonA5,
    accentA6: lightColor.crimsonA6,
    accentA7: lightColor.crimsonA7,
    accentA8: lightColor.crimsonA8,
    accentA9: lightColor.crimsonA9,
    accentA10: lightColor.crimsonA10,
    accentA11: lightColor.crimsonA11,
    accentA12: lightColor.crimsonA12,
  }
})

const pink = createTheme('accent-pink', {
  colors: {
    colorSurfaceAccent: surface.pinkSurface,

    accent1: lightColor.pink1,
    accent2: lightColor.pink2,
    accent3: lightColor.pink3,
    accent4: lightColor.pink4,
    accent5: lightColor.pink5,
    accent6: lightColor.pink6,
    accent7: lightColor.pink7,
    accent8: lightColor.pink8,
    accent9: lightColor.pink9,
    accent9Contrast: contrast.pink9Contrast,
    accent10: lightColor.pink10,
    accent11: lightColor.pink11,
    accent12: lightColor.pink12,
  
    accentA1: lightColor.pinkA1,
    accentA2: lightColor.pinkA2,
    accentA3: lightColor.pinkA3,
    accentA4: lightColor.pinkA4,
    accentA5: lightColor.pinkA5,
    accentA6: lightColor.pinkA6,
    accentA7: lightColor.pinkA7,
    accentA8: lightColor.pinkA8,
    accentA9: lightColor.pinkA9,
    accentA10: lightColor.pinkA10,
    accentA11: lightColor.pinkA11,
    accentA12: lightColor.pinkA12,
  }
})

const plum = createTheme('accent-plum', {
  colors: {
    colorSurfaceAccent: surface.plumSurface,

    accent1: lightColor.plum1,
    accent2: lightColor.plum2,
    accent3: lightColor.plum3,
    accent4: lightColor.plum4,
    accent5: lightColor.plum5,
    accent6: lightColor.plum6,
    accent7: lightColor.plum7,
    accent8: lightColor.plum8,
    accent9: lightColor.plum9,
    accent9Contrast: contrast.plum9Contrast,
    accent10: lightColor.plum10,
    accent11: lightColor.plum11,
    accent12: lightColor.plum12,
  
    accentA1: lightColor.plumA1,
    accentA2: lightColor.plumA2,
    accentA3: lightColor.plumA3,
    accentA4: lightColor.plumA4,
    accentA5: lightColor.plumA5,
    accentA6: lightColor.plumA6,
    accentA7: lightColor.plumA7,
    accentA8: lightColor.plumA8,
    accentA9: lightColor.plumA9,
    accentA10: lightColor.plumA10,
    accentA11: lightColor.plumA11,
    accentA12: lightColor.plumA12,
  }
})

const purple = createTheme('accent-purple', {
  colors: {
    colorSurfaceAccent: surface.purpleSurface,

    accent1: lightColor.purple1,
    accent2: lightColor.purple2,
    accent3: lightColor.purple3,
    accent4: lightColor.purple4,
    accent5: lightColor.purple5,
    accent6: lightColor.purple6,
    accent7: lightColor.purple7,
    accent8: lightColor.purple8,
    accent9: lightColor.purple9,
    accent9Contrast: contrast.purple9Contrast,
    accent10: lightColor.purple10,
    accent11: lightColor.purple11,
    accent12: lightColor.purple12,
  
    accentA1: lightColor.purpleA1,
    accentA2: lightColor.purpleA2,
    accentA3: lightColor.purpleA3,
    accentA4: lightColor.purpleA4,
    accentA5: lightColor.purpleA5,
    accentA6: lightColor.purpleA6,
    accentA7: lightColor.purpleA7,
    accentA8: lightColor.purpleA8,
    accentA9: lightColor.purpleA9,
    accentA10: lightColor.purpleA10,
    accentA11: lightColor.purpleA11,
    accentA12: lightColor.purpleA12,
  }
})

const violet = createTheme('accent-violet', {
  colors: {
    colorSurfaceAccent: surface.violetSurface,

    accent1: lightColor.violet1,
    accent2: lightColor.violet2,
    accent3: lightColor.violet3,
    accent4: lightColor.violet4,
    accent5: lightColor.violet5,
    accent6: lightColor.violet6,
    accent7: lightColor.violet7,
    accent8: lightColor.violet8,
    accent9: lightColor.violet9,
    accent9Contrast: contrast.violet9Contrast,
    accent10: lightColor.violet10,
    accent11: lightColor.violet11,
    accent12: lightColor.violet12,
  
    accentA1: lightColor.violetA1,
    accentA2: lightColor.violetA2,
    accentA3: lightColor.violetA3,
    accentA4: lightColor.violetA4,
    accentA5: lightColor.violetA5,
    accentA6: lightColor.violetA6,
    accentA7: lightColor.violetA7,
    accentA8: lightColor.violetA8,
    accentA9: lightColor.violetA9,
    accentA10: lightColor.violetA10,
    accentA11: lightColor.violetA11,
    accentA12: lightColor.violetA12,
  }
})

const iris = createTheme('accent-iris', {
  colors: {
    colorSurfaceAccent: surface.irisSurface,

    accent1: lightColor.iris1,
    accent2: lightColor.iris2,
    accent3: lightColor.iris3,
    accent4: lightColor.iris4,
    accent5: lightColor.iris5,
    accent6: lightColor.iris6,
    accent7: lightColor.iris7,
    accent8: lightColor.iris8,
    accent9: lightColor.iris9,
    accent9Contrast: contrast.iris9Contrast,
    accent10: lightColor.iris10,
    accent11: lightColor.iris11,
    accent12: lightColor.iris12,
  
    accentA1: lightColor.irisA1,
    accentA2: lightColor.irisA2,
    accentA3: lightColor.irisA3,
    accentA4: lightColor.irisA4,
    accentA5: lightColor.irisA5,
    accentA6: lightColor.irisA6,
    accentA7: lightColor.irisA7,
    accentA8: lightColor.irisA8,
    accentA9: lightColor.irisA9,
    accentA10: lightColor.irisA10,
    accentA11: lightColor.irisA11,
    accentA12: lightColor.irisA12,
  }
})

const indigo = createTheme('accent-indigo', {
  colors: {
    colorSurfaceAccent: surface.indigoSurface,

    accent1: lightColor.indigo1,
    accent2: lightColor.indigo2,
    accent3: lightColor.indigo3,
    accent4: lightColor.indigo4,
    accent5: lightColor.indigo5,
    accent6: lightColor.indigo6,
    accent7: lightColor.indigo7,
    accent8: lightColor.indigo8,
    accent9: lightColor.indigo9,
    accent9Contrast: contrast.indigo9Contrast,
    accent10: lightColor.indigo10,
    accent11: lightColor.indigo11,
    accent12: lightColor.indigo12,
  
    accentA1: lightColor.indigoA1,
    accentA2: lightColor.indigoA2,
    accentA3: lightColor.indigoA3,
    accentA4: lightColor.indigoA4,
    accentA5: lightColor.indigoA5,
    accentA6: lightColor.indigoA6,
    accentA7: lightColor.indigoA7,
    accentA8: lightColor.indigoA8,
    accentA9: lightColor.indigoA9,
    accentA10: lightColor.indigoA10,
    accentA11: lightColor.indigoA11,
    accentA12: lightColor.indigoA12,
  }
})

const blue = createTheme('accent-blue', {
  colors: {
    colorSurfaceAccent: surface.blueSurface,

    accent1: lightColor.blue1,
    accent2: lightColor.blue2,
    accent3: lightColor.blue3,
    accent4: lightColor.blue4,
    accent5: lightColor.blue5,
    accent6: lightColor.blue6,
    accent7: lightColor.blue7,
    accent8: lightColor.blue8,
    accent9: lightColor.blue9,
    accent9Contrast: contrast.blue9Contrast,
    accent10: lightColor.blue10,
    accent11: lightColor.blue11,
    accent12: lightColor.blue12,
  
    accentA1: lightColor.blueA1,
    accentA2: lightColor.blueA2,
    accentA3: lightColor.blueA3,
    accentA4: lightColor.blueA4,
    accentA5: lightColor.blueA5,
    accentA6: lightColor.blueA6,
    accentA7: lightColor.blueA7,
    accentA8: lightColor.blueA8,
    accentA9: lightColor.blueA9,
    accentA10: lightColor.blueA10,
    accentA11: lightColor.blueA11,
    accentA12: lightColor.blueA12,
  }
})

const cyan = createTheme('accent-cyan', {
  colors: {
    colorSurfaceAccent: surface.cyanSurface,

    accent1: lightColor.cyan1,
    accent2: lightColor.cyan2,
    accent3: lightColor.cyan3,
    accent4: lightColor.cyan4,
    accent5: lightColor.cyan5,
    accent6: lightColor.cyan6,
    accent7: lightColor.cyan7,
    accent8: lightColor.cyan8,
    accent9: lightColor.cyan9,
    accent9Contrast: contrast.cyan9Contrast,
    accent10: lightColor.cyan10,
    accent11: lightColor.cyan11,
    accent12: lightColor.cyan12,
  
    accentA1: lightColor.cyanA1,
    accentA2: lightColor.cyanA2,
    accentA3: lightColor.cyanA3,
    accentA4: lightColor.cyanA4,
    accentA5: lightColor.cyanA5,
    accentA6: lightColor.cyanA6,
    accentA7: lightColor.cyanA7,
    accentA8: lightColor.cyanA8,
    accentA9: lightColor.cyanA9,
    accentA10: lightColor.cyanA10,
    accentA11: lightColor.cyanA11,
    accentA12: lightColor.cyanA12,
  }
})

const teal = createTheme('accent-teal', {
  colors: {
    colorSurfaceAccent: surface.tealSurface,

    accent1: lightColor.teal1,
    accent2: lightColor.teal2,
    accent3: lightColor.teal3,
    accent4: lightColor.teal4,
    accent5: lightColor.teal5,
    accent6: lightColor.teal6,
    accent7: lightColor.teal7,
    accent8: lightColor.teal8,
    accent9: lightColor.teal9,
    accent9Contrast: contrast.teal9Contrast,
    accent10: lightColor.teal10,
    accent11: lightColor.teal11,
    accent12: lightColor.teal12,
  
    accentA1: lightColor.tealA1,
    accentA2: lightColor.tealA2,
    accentA3: lightColor.tealA3,
    accentA4: lightColor.tealA4,
    accentA5: lightColor.tealA5,
    accentA6: lightColor.tealA6,
    accentA7: lightColor.tealA7,
    accentA8: lightColor.tealA8,
    accentA9: lightColor.tealA9,
    accentA10: lightColor.tealA10,
    accentA11: lightColor.tealA11,
    accentA12: lightColor.tealA12,
  }
})

const jade = createTheme('accent-jade', {
  colors: {
    colorSurfaceAccent: surface.jadeSurface,

    accent1: lightColor.jade1,
    accent2: lightColor.jade2,
    accent3: lightColor.jade3,
    accent4: lightColor.jade4,
    accent5: lightColor.jade5,
    accent6: lightColor.jade6,
    accent7: lightColor.jade7,
    accent8: lightColor.jade8,
    accent9: lightColor.jade9,
    accent9Contrast: contrast.jade9Contrast,
    accent10: lightColor.jade10,
    accent11: lightColor.jade11,
    accent12: lightColor.jade12,
  
    accentA1: lightColor.jadeA1,
    accentA2: lightColor.jadeA2,
    accentA3: lightColor.jadeA3,
    accentA4: lightColor.jadeA4,
    accentA5: lightColor.jadeA5,
    accentA6: lightColor.jadeA6,
    accentA7: lightColor.jadeA7,
    accentA8: lightColor.jadeA8,
    accentA9: lightColor.jadeA9,
    accentA10: lightColor.jadeA10,
    accentA11: lightColor.jadeA11,
    accentA12: lightColor.jadeA12,
  }
})

const green = createTheme('accent-green', {
  colors: {
    colorSurfaceAccent: surface.greenSurface,

    accent1: lightColor.green1,
    accent2: lightColor.green2,
    accent3: lightColor.green3,
    accent4: lightColor.green4,
    accent5: lightColor.green5,
    accent6: lightColor.green6,
    accent7: lightColor.green7,
    accent8: lightColor.green8,
    accent9: lightColor.green9,
    accent9Contrast: contrast.green9Contrast,
    accent10: lightColor.green10,
    accent11: lightColor.green11,
    accent12: lightColor.green12,
  
    accentA1: lightColor.greenA1,
    accentA2: lightColor.greenA2,
    accentA3: lightColor.greenA3,
    accentA4: lightColor.greenA4,
    accentA5: lightColor.greenA5,
    accentA6: lightColor.greenA6,
    accentA7: lightColor.greenA7,
    accentA8: lightColor.greenA8,
    accentA9: lightColor.greenA9,
    accentA10: lightColor.greenA10,
    accentA11: lightColor.greenA11,
    accentA12: lightColor.greenA12,
  }
})

const grass = createTheme('accent-grass', {
  colors: {
    colorSurfaceAccent: surface.grassSurface,

    accent1: lightColor.grass1,
    accent2: lightColor.grass2,
    accent3: lightColor.grass3,
    accent4: lightColor.grass4,
    accent5: lightColor.grass5,
    accent6: lightColor.grass6,
    accent7: lightColor.grass7,
    accent8: lightColor.grass8,
    accent9: lightColor.grass9,
    accent9Contrast: contrast.grass9Contrast,
    accent10: lightColor.grass10,
    accent11: lightColor.grass11,
    accent12: lightColor.grass12,
  
    accentA1: lightColor.grassA1,
    accentA2: lightColor.grassA2,
    accentA3: lightColor.grassA3,
    accentA4: lightColor.grassA4,
    accentA5: lightColor.grassA5,
    accentA6: lightColor.grassA6,
    accentA7: lightColor.grassA7,
    accentA8: lightColor.grassA8,
    accentA9: lightColor.grassA9,
    accentA10: lightColor.grassA10,
    accentA11: lightColor.grassA11,
    accentA12: lightColor.grassA12,
  }
})

const brown = createTheme('accent-brown', {
  colors: {
    colorSurfaceAccent: surface.brownSurface,

    accent1: lightColor.brown1,
    accent2: lightColor.brown2,
    accent3: lightColor.brown3,
    accent4: lightColor.brown4,
    accent5: lightColor.brown5,
    accent6: lightColor.brown6,
    accent7: lightColor.brown7,
    accent8: lightColor.brown8,
    accent9: lightColor.brown9,
    accent9Contrast: contrast.brown9Contrast,
    accent10: lightColor.brown10,
    accent11: lightColor.brown11,
    accent12: lightColor.brown12,
  
    accentA1: lightColor.brownA1,
    accentA2: lightColor.brownA2,
    accentA3: lightColor.brownA3,
    accentA4: lightColor.brownA4,
    accentA5: lightColor.brownA5,
    accentA6: lightColor.brownA6,
    accentA7: lightColor.brownA7,
    accentA8: lightColor.brownA8,
    accentA9: lightColor.brownA9,
    accentA10: lightColor.brownA10,
    accentA11: lightColor.brownA11,
    accentA12: lightColor.brownA12,
  }
})

const bronze = createTheme('accent-bronze', {
  colors: {
    colorSurfaceAccent: surface.bronzeSurface,

    accent1: lightColor.bronze1,
    accent2: lightColor.bronze2,
    accent3: lightColor.bronze3,
    accent4: lightColor.bronze4,
    accent5: lightColor.bronze5,
    accent6: lightColor.bronze6,
    accent7: lightColor.bronze7,
    accent8: lightColor.bronze8,
    accent9: lightColor.bronze9,
    accent9Contrast: contrast.bronze9Contrast,
    accent10: lightColor.bronze10,
    accent11: lightColor.bronze11,
    accent12: lightColor.bronze12,
  
    accentA1: lightColor.bronzeA1,
    accentA2: lightColor.bronzeA2,
    accentA3: lightColor.bronzeA3,
    accentA4: lightColor.bronzeA4,
    accentA5: lightColor.bronzeA5,
    accentA6: lightColor.bronzeA6,
    accentA7: lightColor.bronzeA7,
    accentA8: lightColor.bronzeA8,
    accentA9: lightColor.bronzeA9,
    accentA10: lightColor.bronzeA10,
    accentA11: lightColor.bronzeA11,
    accentA12: lightColor.bronzeA12,
  }
})

const gold = createTheme('accent-gold', {
  colors: {
    colorSurfaceAccent: surface.goldSurface,

    accent1: lightColor.gold1,
    accent2: lightColor.gold2,
    accent3: lightColor.gold3,
    accent4: lightColor.gold4,
    accent5: lightColor.gold5,
    accent6: lightColor.gold6,
    accent7: lightColor.gold7,
    accent8: lightColor.gold8,
    accent9: lightColor.gold9,
    accent9Contrast: contrast.gold9Contrast,
    accent10: lightColor.gold10,
    accent11: lightColor.gold11,
    accent12: lightColor.gold12,
  
    accentA1: lightColor.goldA1,
    accentA2: lightColor.goldA2,
    accentA3: lightColor.goldA3,
    accentA4: lightColor.goldA4,
    accentA5: lightColor.goldA5,
    accentA6: lightColor.goldA6,
    accentA7: lightColor.goldA7,
    accentA8: lightColor.goldA8,
    accentA9: lightColor.goldA9,
    accentA10: lightColor.goldA10,
    accentA11: lightColor.goldA11,
    accentA12: lightColor.goldA12,
  }
})

const sky = createTheme('accent-sky', {
  colors: {
    colorSurfaceAccent: surface.skySurface,

    accent1: lightColor.sky1,
    accent2: lightColor.sky2,
    accent3: lightColor.sky3,
    accent4: lightColor.sky4,
    accent5: lightColor.sky5,
    accent6: lightColor.sky6,
    accent7: lightColor.sky7,
    accent8: lightColor.sky8,
    accent9: lightColor.sky9,
    accent9Contrast: contrast.sky9Contrast,
    accent10: lightColor.sky10,
    accent11: lightColor.sky11,
    accent12: lightColor.sky12,
  
    accentA1: lightColor.skyA1,
    accentA2: lightColor.skyA2,
    accentA3: lightColor.skyA3,
    accentA4: lightColor.skyA4,
    accentA5: lightColor.skyA5,
    accentA6: lightColor.skyA6,
    accentA7: lightColor.skyA7,
    accentA8: lightColor.skyA8,
    accentA9: lightColor.skyA9,
    accentA10: lightColor.skyA10,
    accentA11: lightColor.skyA11,
    accentA12: lightColor.skyA12,
  }
})

const mint = createTheme('accent-mint', {
  colors: {
    colorSurfaceAccent: surface.mintSurface,

    accent1: lightColor.mint1,
    accent2: lightColor.mint2,
    accent3: lightColor.mint3,
    accent4: lightColor.mint4,
    accent5: lightColor.mint5,
    accent6: lightColor.mint6,
    accent7: lightColor.mint7,
    accent8: lightColor.mint8,
    accent9: lightColor.mint9,
    accent9Contrast: contrast.mint9Contrast,
    accent10: lightColor.mint10,
    accent11: lightColor.mint11,
    accent12: lightColor.mint12,
  
    accentA1: lightColor.mintA1,
    accentA2: lightColor.mintA2,
    accentA3: lightColor.mintA3,
    accentA4: lightColor.mintA4,
    accentA5: lightColor.mintA5,
    accentA6: lightColor.mintA6,
    accentA7: lightColor.mintA7,
    accentA8: lightColor.mintA8,
    accentA9: lightColor.mintA9,
    accentA10: lightColor.mintA10,
    accentA11: lightColor.mintA11,
    accentA12: lightColor.mintA12,
  }
})

const lime = createTheme('accent-lime', {
  colors: {
    colorSurfaceAccent: surface.limeSurface,

    accent1: lightColor.lime1,
    accent2: lightColor.lime2,
    accent3: lightColor.lime3,
    accent4: lightColor.lime4,
    accent5: lightColor.lime5,
    accent6: lightColor.lime6,
    accent7: lightColor.lime7,
    accent8: lightColor.lime8,
    accent9: lightColor.lime9,
    accent9Contrast: contrast.lime9Contrast,
    accent10: lightColor.lime10,
    accent11: lightColor.lime11,
    accent12: lightColor.lime12,
  
    accentA1: lightColor.limeA1,
    accentA2: lightColor.limeA2,
    accentA3: lightColor.limeA3,
    accentA4: lightColor.limeA4,
    accentA5: lightColor.limeA5,
    accentA6: lightColor.limeA6,
    accentA7: lightColor.limeA7,
    accentA8: lightColor.limeA8,
    accentA9: lightColor.limeA9,
    accentA10: lightColor.limeA10,
    accentA11: lightColor.limeA11,
    accentA12: lightColor.limeA12,
  }
})

const yellow = createTheme('accent-yellow', {
  colors: {
    colorSurfaceAccent: surface.yellowSurface,

    accent1: lightColor.yellow1,
    accent2: lightColor.yellow2,
    accent3: lightColor.yellow3,
    accent4: lightColor.yellow4,
    accent5: lightColor.yellow5,
    accent6: lightColor.yellow6,
    accent7: lightColor.yellow7,
    accent8: lightColor.yellow8,
    accent9: lightColor.yellow9,
    accent9Contrast: contrast.yellow9Contrast,
    accent10: lightColor.yellow10,
    accent11: lightColor.yellow11,
    accent12: lightColor.yellow12,
  
    accentA1: lightColor.yellowA1,
    accentA2: lightColor.yellowA2,
    accentA3: lightColor.yellowA3,
    accentA4: lightColor.yellowA4,
    accentA5: lightColor.yellowA5,
    accentA6: lightColor.yellowA6,
    accentA7: lightColor.yellowA7,
    accentA8: lightColor.yellowA8,
    accentA9: lightColor.yellowA9,
    accentA10: lightColor.yellowA10,
    accentA11: lightColor.yellowA11,
    accentA12: lightColor.yellowA12,
  }
})

const amber = createTheme('accent-amber', {
  colors: {
    colorSurfaceAccent: surface.amberSurface,

    accent1: lightColor.amber1,
    accent2: lightColor.amber2,
    accent3: lightColor.amber3,
    accent4: lightColor.amber4,
    accent5: lightColor.amber5,
    accent6: lightColor.amber6,
    accent7: lightColor.amber7,
    accent8: lightColor.amber8,
    accent9: lightColor.amber9,
    accent9Contrast: contrast.amber9Contrast,
    accent10: lightColor.amber10,
    accent11: lightColor.amber11,
    accent12: lightColor.amber12,
  
    accentA1: lightColor.amberA1,
    accentA2: lightColor.amberA2,
    accentA3: lightColor.amberA3,
    accentA4: lightColor.amberA4,
    accentA5: lightColor.amberA5,
    accentA6: lightColor.amberA6,
    accentA7: lightColor.amberA7,
    accentA8: lightColor.amberA8,
    accentA9: lightColor.amberA9,
    accentA10: lightColor.amberA10,
    accentA11: lightColor.amberA11,
    accentA12: lightColor.amberA12,
  }
})

const orange = createTheme('accent-orange', {
  colors: {
    colorSurfaceAccent: surface.orangeSurface,

    accent1: lightColor.orange1,
    accent2: lightColor.orange2,
    accent3: lightColor.orange3,
    accent4: lightColor.orange4,
    accent5: lightColor.orange5,
    accent6: lightColor.orange6,
    accent7: lightColor.orange7,
    accent8: lightColor.orange8,
    accent9: lightColor.orange9,
    accent9Contrast: contrast.orange9Contrast,
    accent10: lightColor.orange10,
    accent11: lightColor.orange11,
    accent12: lightColor.orange12,
  
    accentA1: lightColor.orangeA1,
    accentA2: lightColor.orangeA2,
    accentA3: lightColor.orangeA3,
    accentA4: lightColor.orangeA4,
    accentA5: lightColor.orangeA5,
    accentA6: lightColor.orangeA6,
    accentA7: lightColor.orangeA7,
    accentA8: lightColor.orangeA8,
    accentA9: lightColor.orangeA9,
    accentA10: lightColor.orangeA10,
    accentA11: lightColor.orangeA11,
    accentA12: lightColor.orangeA12,
  }
})

const mauve = createTheme('gray-mauve', {
  colors: {
    graySurface: surface.mauveSurface,

    gray1: lightColor.mauve1,
    gray2: lightColor.mauve2,
    gray2Translucent: translucent.gray2Translucent,
    gray3: lightColor.mauve3,
    gray4: lightColor.mauve4,
    gray5: lightColor.mauve5,
    gray6: lightColor.mauve6,
    gray7: lightColor.mauve7,
    gray8: lightColor.mauve8,
    gray9: lightColor.mauve9,
    gray10: lightColor.mauve10,
    gray11: lightColor.mauve11,
    gray12: lightColor.mauve12,

    grayA1: lightColor.mauveA1,
    grayA2: lightColor.mauveA2,
    grayA3: lightColor.mauveA3,
    grayA4: lightColor.mauveA4,
    grayA5: lightColor.mauveA5,
    grayA6: lightColor.mauveA6,
    grayA7: lightColor.mauveA7,
    grayA8: lightColor.mauveA8,
    grayA9: lightColor.mauveA9,
    grayA10: lightColor.mauveA10,
    grayA11: lightColor.mauveA11,
    grayA12: lightColor.mauveA12,
  },
})

const slate = createTheme('gray-slate', {
  colors: {
    graySurface: surface.slateSurface,

    gray1: lightColor.slate1,
    gray2: lightColor.slate2,
    gray2Translucent: translucent.gray2Translucent,
    gray3: lightColor.slate3,
    gray4: lightColor.slate4,
    gray5: lightColor.slate5,
    gray6: lightColor.slate6,
    gray7: lightColor.slate7,
    gray8: lightColor.slate8,
    gray9: lightColor.slate9,
    gray10: lightColor.slate10,
    gray11: lightColor.slate11,
    gray12: lightColor.slate12,

    grayA1: lightColor.slateA1,
    grayA2: lightColor.slateA2,
    grayA3: lightColor.slateA3,
    grayA4: lightColor.slateA4,
    grayA5: lightColor.slateA5,
    grayA6: lightColor.slateA6,
    grayA7: lightColor.slateA7,
    grayA8: lightColor.slateA8,
    grayA9: lightColor.slateA9,
    grayA10: lightColor.slateA10,
    grayA11: lightColor.slateA11,
    grayA12: lightColor.slateA12,
  },
})

const sage = createTheme('gray-sage', {
  colors: {
    graySurface: surface.sageSurface,

    gray1: lightColor.sage1,
    gray2: lightColor.sage2,
    gray2Translucent: translucent.gray2Translucent,
    gray3: lightColor.sage3,
    gray4: lightColor.sage4,
    gray5: lightColor.sage5,
    gray6: lightColor.sage6,
    gray7: lightColor.sage7,
    gray8: lightColor.sage8,
    gray9: lightColor.sage9,
    gray10: lightColor.sage10,
    gray11: lightColor.sage11,
    gray12: lightColor.sage12,

    grayA1: lightColor.sageA1,
    grayA2: lightColor.sageA2,
    grayA3: lightColor.sageA3,
    grayA4: lightColor.sageA4,
    grayA5: lightColor.sageA5,
    grayA6: lightColor.sageA6,
    grayA7: lightColor.sageA7,
    grayA8: lightColor.sageA8,
    grayA9: lightColor.sageA9,
    grayA10: lightColor.sageA10,
    grayA11: lightColor.sageA11,
    grayA12: lightColor.sageA12,
  },
})

const olive = createTheme('gray-olive', {
  colors: {
    graySurface: surface.oliveSurface,

    gray1: lightColor.olive1,
    gray2: lightColor.olive2,
    gray2Translucent: translucent.gray2Translucent,
    gray3: lightColor.olive3,
    gray4: lightColor.olive4,
    gray5: lightColor.olive5,
    gray6: lightColor.olive6,
    gray7: lightColor.olive7,
    gray8: lightColor.olive8,
    gray9: lightColor.olive9,
    gray10: lightColor.olive10,
    gray11: lightColor.olive11,
    gray12: lightColor.olive12,

    grayA1: lightColor.oliveA1,
    grayA2: lightColor.oliveA2,
    grayA3: lightColor.oliveA3,
    grayA4: lightColor.oliveA4,
    grayA5: lightColor.oliveA5,
    grayA6: lightColor.oliveA6,
    grayA7: lightColor.oliveA7,
    grayA8: lightColor.oliveA8,
    grayA9: lightColor.oliveA9,
    grayA10: lightColor.oliveA10,
    grayA11: lightColor.oliveA11,
    grayA12: lightColor.oliveA12,
  },
})

const sand = createTheme('gray-sand', {
  colors: {
    graySurface: surface.sandSurface,

    gray1: lightColor.sand1,
    gray2: lightColor.sand2,
    gray2Translucent: translucent.gray2Translucent,
    gray3: lightColor.sand3,
    gray4: lightColor.sand4,
    gray5: lightColor.sand5,
    gray6: lightColor.sand6,
    gray7: lightColor.sand7,
    gray8: lightColor.sand8,
    gray9: lightColor.sand9,
    gray10: lightColor.sand10,
    gray11: lightColor.sand11,
    gray12: lightColor.sand12,

    grayA1: lightColor.sandA1,
    grayA2: lightColor.sandA2,
    grayA3: lightColor.sandA3,
    grayA4: lightColor.sandA4,
    grayA5: lightColor.sandA5,
    grayA6: lightColor.sandA6,
    grayA7: lightColor.sandA7,
    grayA8: lightColor.sandA8,
    grayA9: lightColor.sandA9,
    grayA10: lightColor.sandA10,
    grayA11: lightColor.sandA11,
    grayA12: lightColor.sandA12,
  },
})

const darkTheme = createTheme('dark-theme', {
  colors: {
  /////Gray 2 equivalent for translucent panels
  gray2Translucent: useP3Colors ? 'color(display-p3 0.1137 0.1137 0.1137 / 0.7)' : translucent.gray2Translucent,
  mauve2Translucent: useP3Colors ? 'color(display-p3 0.1176 0.1137 0.1176 / 0.7)' : translucent.mauve2Translucent,
  slate2Translucent: useP3Colors ? 'color(display-p3 0.1059 0.1137 0.1176 / 0.7)' : translucent.slate2Translucent,
  sage2Translucent: useP3Colors ? 'color(display-p3 0.102 0.1137 0.1059 / 0.7)' : translucent.sage2Translucent,
  olive2Translucent: useP3Colors ? 'color(display-p3 0.1059 0.1137 0.102 / 0.7)' : translucent.olive2Translucent,
  sand2Translucent: useP3Colors ? 'color(display-p3 0.1137 0.1137 0.1059 / 0.7)' : translucent.sand2Translucent,


  /////surface color
  graySurface: useP3Colors ? 'color(display-p3 0.1255 0.1255 0.1255 / 0.5)' : '#21212180',
  mauveSurface: useP3Colors ? 'color(display-p3 0.1333 0.1255 0.1333 / 0.5)' : '#22212380',
  slateSurface: useP3Colors ? 'color(display-p3 0.1176 0.1255 0.1333 / 0.5)' : '#1f212380',
  sageSurface: useP3Colors ? 'color(display-p3 0.1176 0.1255 0.1176 / 0.5)' : '#1e201f80',
  oliveSurface: useP3Colors ? 'color(display-p3 0.1176 0.1255 0.1176 / 0.5)' : '#1f201e80',
  sandSurface: useP3Colors ? 'color(display-p3 0.1255 0.1255 0.1255 / 0.5)' : '#21212080',
  tomatoSurface: useP3Colors ? 'color(display-p3 0.1569 0.0941 0.0784 / 0.5)' : '#2d191580',
  redSurface: useP3Colors ? 'color(display-p3 0.1647 0.0863 0.0863 / 0.5)' : '#2f151780',
  rubySurface: useP3Colors ? 'color(display-p3 0.1569 0.0941 0.1098 / 0.5)' : '#2b191d80',
  crimsonSurface: useP3Colors ? 'color(display-p3 0.1647 0.0863 0.1176 / 0.5)' : '#2f151f80',
  pinkSurface: useP3Colors ? 'color(display-p3 0.1725 0.0784 0.149 / 0.5)' : '#31132980',
  plumSurface: useP3Colors ? 'color(display-p3 0.1647 0.0863 0.1725 / 0.5)' : '#2f152f80',
  purpleSurface: useP3Colors ? 'color(display-p3 0.149 0.0941 0.1961 / 0.5)' : '#2b173580',
  violetSurface: useP3Colors ? 'color(display-p3 0.1333 0.102 0.2118 / 0.5)' : '#25193980',
  irisSurface: useP3Colors ? 'color(display-p3 0.1098 0.102 0.2118 / 0.5)' : '#1d1b3980',
  indigoSurface: useP3Colors ? 'color(display-p3 0.0941 0.1098 0.2196 / 0.5)' : '#171d3b80',
  blueSurface: useP3Colors ? 'color(display-p3 0.0706 0.1255 0.2196 / 0.5)' : '#11213d80',
  cyanSurface: useP3Colors ? 'color(display-p3 0.0784 0.1412 0.1725 / 0.5)' : '#11252d80',
  tealSurface: useP3Colors ? 'color(display-p3 0.0863 0.149 0.1412 / 0.5)' : '#13272580',
  jadeSurface: useP3Colors ? 'color(display-p3 0.0863 0.149 0.1176 / 0.5)' : '#13271f80',
  greenSurface: useP3Colors ? 'color(display-p3 0.0941 0.1412 0.1098 / 0.5)' : '#15251d80',
  grassSurface: useP3Colors ? 'color(display-p3 0.102 0.1333 0.102 / 0.5)' : '#19231b80',
  brownSurface: useP3Colors ? 'color(display-p3 0.1412 0.1176 0.102 / 0.5)' : '#271f1b80',
  bronzeSurface: useP3Colors ? 'color(display-p3 0.1412 0.1255 0.1176 / 0.5)' : '#27211d80',
  goldSurface: useP3Colors ? 'color(display-p3 0.1412 0.1333 0.1098 / 0.5)' : '#25231d80',
  skySurface: useP3Colors ? 'color(display-p3 0.0863 0.1333 0.2196 / 0.5)' : '#13233b80',
  mintSurface: useP3Colors ? 'color(display-p3 0.0941 0.149 0.1412 / 0.5)' : '#15272780',
  limeSurface: useP3Colors ? 'color(display-p3 0.1098 0.1255 0.0784 / 0.5)' : '#1b211580',
  yellowSurface: useP3Colors ? 'color(display-p3 0.1333 0.1176 0.0706 / 0.5)' : '#231f1380',
  amberSurface: useP3Colors ? 'color(display-p3 0.1412 0.1176 0.0784 / 0.5)' : '#271f1380',
  orangeSurface: useP3Colors ? 'color(display-p3 0.1412 0.1098 0.0706 / 0.5)' : '#271d1380',

    //semantic color
    colorBackground: darkColor.gray1,
    colorOverlay: blackA.blackA8,
    colorPanelSoid: lightColor.gray2,
    colorPanelTraslucent: translucent.gray2Translucent,
    colorSurface: "rgba(255, 255, 255, 0.25)",
  }
});



export const globalStyles = globalCss({
  ...fonts,

});

