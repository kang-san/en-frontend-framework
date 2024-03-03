

export const radiiNone = {
  radiusFactor: 0,
  radiusFull: '0px',
  radiusThumb: '0.5px',
}

export const radiiSmall = {
  radiusFactor: 0.75,
  radiusFull: '0px',
  radiusThumb: '0.5px',
}

export const radiiMedium = {
  radiusFactor: 1,
  radiusFull: '0px',
  radiusThumb: '9999px',
}

export const radiiLarge = {
  radiusFactor: 1.5,
  radiusFull: '0px',
  radiusThumb: '9999px',
}

export const radiiFull = {
  radiusFactor: 1.5,
  radiusFull: '9999px',
  radiusThumb: '9999px',
}

type RadiiInput = {
  radiusFactor: number;
  type: 'none' | 'small' | 'medium' | 'large' | 'full';
};


const radiiCal = (input: RadiiInput): number => {
  const scalingValues = {
    none: 0.9,
    small: 0.95,
    medium: 1.0,
    large: 1.05,
    full: 1.1,
  };
  
  return input.radiusFactor * scalingValues[input.type];
};
