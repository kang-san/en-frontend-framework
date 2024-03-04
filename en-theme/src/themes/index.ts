import { createStitches } from '@stitches/react';
import { fonts } from '../styles/fonts';
import { lightColor, darkColor, whiteA, blackA } from '../styles/tokens/colors';
import { radiiNone, radiiSmall, radiiMedium, radiiLarge, radiiFull } from 'src/styles/tokens/radii';

export const { styled, theme, globalCss, keyframes, createTheme } = createStitches({
  theme: {
    colors: {
      //contrast color
      tomato9Contrast: 'white',
      red9Contrast: 'white',
      ruby9Contrast: 'white',
      crimson9Contrast: 'white',
      pink9Contrast: 'white',
      plum9Contrast: 'white',
      purple9Contrast: 'white',
      violet9Contrast: 'white',
      iris9Contrast: 'white',
      indigo9Contrast: 'white',
      blue9Contrast: 'white',
      cyan9Contrast: 'white',
      teal9Contrast: 'white',
      jade9Contrast: 'white',
      green9Contrast: 'white',
      grass9Contrast: 'white',
      orange9Contrast: 'white',
      brown9Contrast: 'white',
      sky9Contrast: '#1c2024', // light mode slate 12
      mint9Contrast: '#1a211e', // light mode sage 12
      lime9Contrast: '#1d211c', // light mode olive 12
      yellow9Contrast: '#21201c', // light mode sand 12
      amber9Contrast: '#21201c', // light mode sand 12
      gold9Contrast: 'white',
      bronze9Contrast: 'white',
      gray9Contrast: 'white',
      //transparency

      //////accent color
      //tomato
      colorSurfaceAccent: tomatoSurface,

      accent1: lightColor.tomato1,
      accent2: lightColor.tomato2,
      accent3: lightColor.tomato3,
      accent4: lightColor.tomato4,
      accent5: lightColor.tomato5,
      accent6: lightColor.tomato6,
      accent7: lightColor.tomato7,
      accent8: lightColor.tomato8,
      accent9: lightColor.tomato9,
      accent9Contrast: lightColor.tomato9Contrast,
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
  }
})

export const lightTheme = createTheme('light-theme', {
    /////surface color
    graySurface: '#ffffffcc',
    mauveSurface: '#ffffffcc',
    slateSurface: '#ffffffcc',
    sageSurface: '#ffffffcc',
    oliveSurface: '#ffffffcc',
    sandSurface: '#ffffffcc',
    tomatoSurface: '#fff6f5cc',
    redSurface: '#fff5f5cc',
    rubySurface: '#fff5f6cc',
    crimsonSurface: '#fef5f8cc',
    pinkSurface: '#fef5facc',
    plumSurface: '#fdf5fdcc',
    purpleSurface: '#faf5fecc',
    violetSurface: '#f9f6ffcc',
    irisSurface: '#f6f6ffcc',
    indigoSurface: '#f5f8ffcc',
    blueSurface: '#f1f9ffcc',
    cyanSurface: '#eff9facc',
    tealSurface: '#f0faf8cc',
    jadeSurface: '#f1faf5cc',
    greenSurface: '#f1faf4cc',
    grassSurface: '#f3faf3cc',
    brownSurface: '#fbf8f4cc',
    bronzeSurface: '#fdf5f3cc',
    goldSurface: '#f9f8efcc',
    skySurface: '#eef9fdcc',
    mintSurface: '#effaf8cc',
    limeSurface: '#f6f9f0cc',
    yellowSurface: '#fefbe4cc',
    amberSurface: '#fefae4cc',
    orangeSurface: '#fff5e9cc',
    // surface color P3
    grayP3Surface: 'color(display-p3 1 1 1 / 0.8)',
    mauveP3Surface: 'color(display-p3 1 1 1 / 0.8)',
    slateP3Surface: 'color(display-p3 1 1 1 / 0.8)',
    sageP3Surface: 'color(display-p3 1 1 1 / 0.8)',
    oliveP3Surface: 'color(display-p3 1 1 1 / 0.8)',
    sandP3Surface: 'color(display-p3 1 1 1 / 0.8)',
    tomatoP3Surface: 'color(display-p3 0.9922 0.9647 0.9608 / 0.8)',
    redP3Surface: 'color(display-p3 0.9961 0.9647 0.9647 / 0.8)',
    rubyP3Surface: 'color(display-p3 0.9961 0.9647 0.9647 / 0.8)',
    crimsonP3Surface: 'color(display-p3 0.9922 0.9608 0.9725 / 0.8)',
    pinkP3Surface: 'color(display-p3 0.9922 0.9608 0.9804 / 0.8)',
    plumP3Surface: 'color(display-p3 0.9843 0.9647 0.9843 / 0.8)',
    purpleP3Surface: 'color(display-p3 0.9804 0.9647 0.9922 / 0.8)',
    violetP3Surface: 'color(display-p3 0.9725 0.9647 0.9961 / 0.8)',
    irisP3Surface: 'color(display-p3 0.9647 0.9647 0.9961 / 0.8)',
    indigoP3Surface: 'color(display-p3 0.9647 0.9725 0.9961 / 0.8)',
    blueP3Surface: 'color(display-p3 0.9529 0.9765 0.9961 / 0.8)',
    cyanP3Surface: 'color(display-p3 0.9412 0.9765 0.9804 / 0.8)',
    tealP3Surface: 'color(display-p3 0.9451 0.9804 0.9725 / 0.8)',
    jadeP3Surface: 'color(display-p3 0.9529 0.9804 0.9608 / 0.8)',
    greenP3Surface: 'color(display-p3 0.9569 0.9804 0.9608 / 0.8)',
    grassP3Surface: 'color(display-p3 0.9569 0.9804 0.9569 / 0.8)',
    brownP3Surface: 'color(display-p3 0.9843 0.9725 0.9569 / 0.8)',
    bronzeP3Surface: 'color(display-p3 0.9843 0.9608 0.9529 / 0.8)',
    goldP3Surface: 'color(display-p3 0.9765 0.9725 0.9412 / 0.8)',
    skyP3Surface: 'color(display-p3 0.9412 0.9765 0.9843 / 0.8)',
    mintP3Surface: 'color(display-p3 0.9451 0.9804 0.9725 / 0.8)',
    limeP3Surface: 'color(display-p3 0.9725 0.9765 0.9412 / 0.8)',
    yellowP3Surface: 'color(display-p3 0.9961 0.9922 0.902 / 0.8)',
    amberP3Surface: 'color(display-p3 0.9922 0.9843 0.902 / 0.8)',
    orangeP3Surface: 'color(display-p3 0.9961 0.9608 0.9176 / 0.8)',

    //accent color

    //gray color

    //semantic color

    //alpha 

    //Focus, selection, and autofill 

  colors: {
    colorBackground: whiteA.whiteA1,
    colorOverlay: blackA.blackA6,
    colorPanelSolid: whiteA.whiteA1,
    colorPanelTraslucent: whiteA.whiteA8,
    colorSurface: whiteA.whiteA9
  }  
});

export const darkTheme = createTheme('dark-theme', {
  colors: {
    /////Gray 2 equivalent for translucent panels
    gray2Translucent: '#1d1d1db3',
    mauve2Translucent: '#1e1d1eb3',
    slate2Translucent: '#1b1d1eb3',
    sage2Translucent: '#1a1c1bb3',
    olive2Translucent: '#1b1c1ab3',
    sand2Translucent: '#1d1d1bb3',
    // P3 translucent panels
    gray2P3Translucent: 'color(display-p3 0.1137 0.1137 0.1137 / 0.7)',
    mauve2P3Translucent: 'color(display-p3 0.1176 0.1137 0.1176 / 0.7)',
    slate2P3Translucent: 'color(display-p3 0.1059 0.1137 0.1176 / 0.7)',
    sage2P3Translucent: 'color(display-p3 0.102 0.1137 0.1059 / 0.7)',
    olive2P3Translucent: 'color(display-p3 0.1059 0.1137 0.102 / 0.7)',
    sand2P3Translucent: 'color(display-p3 0.1137 0.1137 0.1059 / 0.7)',

    /////surface color
    graySurface: '#21212180',
    mauveSurface: '#22212380',
    slateSurface: '#1f212380',
    sageSurface: '#1e201f80',
    oliveSurface: '#1f201e80',
    sandSurface: '#21212080',
    tomatoSurface: '#2d191580',
    redSurface: '#2f151780',
    rubySurface: '#2b191d80',
    crimsonSurface: '#2f151f80',
    pinkSurface: '#31132980',
    plumSurface: '#2f152f80',
    purpleSurface: '#2b173580',
    violetSurface: '#25193980',
    irisSurface: '#1d1b3980',
    indigoSurface: '#171d3b80',
    blueSurface: '#11213d80',
    cyanSurface: '#11252d80',
    tealSurface: '#13272580',
    jadeSurface: '#13271f80',
    greenSurface: '#15251d80',
    grassSurface: '#19231b80',
    brownSurface: '#271f1b80',
    bronzeSurface: '#27211d80',
    goldSurface: '#25231d80',
    skySurface: '#13233b80',
    mintSurface: '#15272780',
    limeSurface: '#1b211580',
    yellowSurface: '#231f1380',
    amberSurface: '#271f1380',
    orangeSurface: '#271d1380',
    //surface color P3
    grayP3Surface: 'color(display-p3 0.1255 0.1255 0.1255 / 0.5)',
    mauveP3Surface: 'color(display-p3 0.1333 0.1255 0.1333 / 0.5)',
    slateP3Surface: 'color(display-p3 0.1176 0.1255 0.1333 / 0.5)',
    sageP3Surface: 'color(display-p3 0.1176 0.1255 0.1176 / 0.5)',
    oliveP3Surface: 'color(display-p3 0.1176 0.1255 0.1176 / 0.5)',
    sandP3Surface: 'color(display-p3 0.1255 0.1255 0.1255 / 0.5)',
    tomatoP3Surface: 'color(display-p3 0.1569 0.0941 0.0784 / 0.5)',
    redP3Surface: 'color(display-p3 0.1647 0.0863 0.0863 / 0.5)',
    rubyP3Surface: 'color(display-p3 0.1569 0.0941 0.1098 / 0.5)',
    crimsonP3Surface: 'color(display-p3 0.1647 0.0863 0.1176 / 0.5)',
    pinkP3Surface: 'color(display-p3 0.1725 0.0784 0.149 / 0.5)',
    plumP3Surface: 'color(display-p3 0.1647 0.0863 0.1725 / 0.5)',
    purpleP3Surface: 'color(display-p3 0.149 0.0941 0.1961 / 0.5)',
    violetP3Surface: 'color(display-p3 0.1333 0.102 0.2118 / 0.5)',
    irisP3Surface: 'color(display-p3 0.1098 0.102 0.2118 / 0.5)',
    indigoP3Surface: 'color(display-p3 0.0941 0.1098 0.2196 / 0.5)',
    blueP3Surface: 'color(display-p3 0.0706 0.1255 0.2196 / 0.5)',
    cyanP3Surface: 'color(display-p3 0.0784 0.1412 0.1725 / 0.5)',
    tealP3Surface: 'color(display-p3 0.0863 0.149 0.1412 / 0.5)',
    jadeP3Surface: 'color(display-p3 0.0863 0.149 0.1176 / 0.5)',
    greenP3Surface: 'color(display-p3 0.0941 0.1412 0.1098 / 0.5)',
    grassP3Surface: 'color(display-p3 0.102 0.1333 0.102 / 0.5)',
    brownP3Surface: 'color(display-p3 0.1412 0.1176 0.102 / 0.5)',
    bronzeP3Surface: 'color(display-p3 0.1412 0.1255 0.1176 / 0.5)',
    goldP3Surface: 'color(display-p3 0.1412 0.1333 0.1098 / 0.5)',
    skyP3Surface: 'color(display-p3 0.0863 0.1333 0.2196 / 0.5)',
    mintP3Surface: 'color(display-p3 0.0941 0.149 0.1412 / 0.5)',
    limeP3Surface: 'color(display-p3 0.1098 0.1255 0.0784 / 0.5)',
    yellowP3Surface: 'color(display-p3 0.1333 0.1176 0.0706 / 0.5)',
    amberP3Surface: 'color(display-p3 0.1412 0.1176 0.0784 / 0.5)',
    orangeP3Surface: 'color(display-p3 0.1412 0.1098 0.0706 / 0.5)',

  

    //gray color

    //semantic color

    //alpha 

    //Focus, selection, and autofill 

    colorBackground: darkColor.gray1,
    colorOverlay: blackA.blackA8,
    colorPanelSoid: lightColor.gray2,
    colorPanelTraslucent: , // translucent $변수가 들어가야함
    colorSurface: "rgba(255, 255, 255, 0.25)",
  }
});



export const globalStyles = globalCss({
  ...fonts,

});

