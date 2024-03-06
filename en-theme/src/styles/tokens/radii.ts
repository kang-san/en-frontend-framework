type Radii = {
  radiusFactor: number;
  radiusFull: string;
  radiusThumb: string;
};

export const radiiNone: Radii = {
  radiusFactor: 0,
  radiusFull: '0px',
  radiusThumb: '0.5px',
}

export const radiiSmall: Radii = {
  radiusFactor: 0.75,
  radiusFull: '0px',
  radiusThumb: '0.5px',
}

export const radiiMedium: Radii = {
  radiusFactor: 1,
  radiusFull: '0px',
  radiusThumb: '9999px',
}

export const radiiLarge: Radii = {
  radiusFactor: 1.5,
  radiusFull: '0px',
  radiusThumb: '9999px',
}

export const radiiFull: Radii = {
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
