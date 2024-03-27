import React from 'react';
import { useTheme } from '../../theme-provider';
import { BaseButtonStyles } from './basebutton.styles';
import { BaseButtonProps } from './basebutton.props';

export const BaseButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>((props, ref) => {
  const { size, variant, colors, highContrast, radius, ...rest } = props;

  return (
    <BaseButtonStyles
      ref={ref}
      size={ '1' }
      variant={ 'classic' }
      color={ 'indigo' }
      css={{ 'high-contrast': highContrast}}
      radius={ 'medium' }
      {...rest} // 나머지 props를 전달합니다.
    >
      {/* 여기에 버튼의 내용을 렌더링할 수 있습니다. */}
    </BaseButtonStyles>
  );
});