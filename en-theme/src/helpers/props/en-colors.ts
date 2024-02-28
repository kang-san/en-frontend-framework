// prettier-ignore
const enColorScalesRegular = ['tomato', 'red', 'ruby', 'crimson', 'pink', 'plum', 'purple', 'violet', 'iris', 'indigo', 'blue', 'cyan', 'teal', 'jade', 'green', 'grass', 'brown', 'orange' ] as const;
const enColorScalesBright = ['sky', 'mint', 'lime', 'yellow', 'amber'] as const;
const enColorScalesMetal = ['gold', 'bronze'] as const;
// prettier-ignore
const enColorScales = [...enColorScalesRegular, ...enColorScalesBright, ...enColorScalesMetal] as const;
const enGrayScalePure = 'gray' as const;
const enGrayScalesDesaturated = ['mauve', 'slate', 'sage', 'olive', 'sand'] as const;
const enGrayScales = [enGrayScalePure, ...enGrayScalesDesaturated] as const;

function enGetMatchingGrayScale(
  colorScale: (typeof enColorScales)[number]
): (typeof enGrayScales)[number] {
  switch (colorScale) {
    case 'tomato':
    case 'red':
    case 'ruby':
    case 'crimson':
    case 'pink':
    case 'plum':
    case 'purple':
    case 'violet':
      return 'mauve';
    case 'iris':
    case 'indigo':
    case 'blue':
    case 'sky':
    case 'cyan':
      return 'slate';
    case 'teal':
    case 'jade':
    case 'mint':
    case 'green':
      return 'sage';
    case 'grass':
    case 'lime':
      return 'olive';
    case 'yellow':
    case 'amber':
    case 'orange':
    case 'brown':
    case 'gold':
    case 'bronze':
      return 'sand';
  }
}

export {
  enColorScalesRegular,
  enColorScalesBright,
  enColorScalesMetal,
  enColorScales,
  //
  enGrayScalePure,
  enGrayScalesDesaturated,
  enGrayScales,
  //
  enGetMatchingGrayScale,
};
