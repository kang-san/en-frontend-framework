import React from 'react';
import { useTheme } from '../../theme-provider';
import { BaseButtonStyles } from './basebutton.styles';
import { BaseButtonProps } from './basebutton.props';

export const BaseButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>((props, ref) => {
  const { size, variant, colors, highContrast, radius, ...rest } = props;
  const { themeState } = useTheme();

  return (
    <BaseButtonStyles
      ref={ref}
      size={ size }
      variant={ variant }
      color={ colors }
      css={{ 'high-contrast': highContrast}}
      radius={ radius }
      {...rest} 
    >
    </BaseButtonStyles>
  );
});