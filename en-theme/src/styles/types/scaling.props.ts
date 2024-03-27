export const ScalingValue = ['90%' , '95%' , '100%' , '105%' , '110%'] as const;

export interface DataScalingProps {
  '90%': { '--scaling': number };
  '95%': { '--scaling': number };
  '100%': { '--scaling': number };
  '105%': { '--scaling': number };
  '110%': { '--scaling': number };
}