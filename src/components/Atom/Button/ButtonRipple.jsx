import React from 'react';
import PropTypes from 'prop-types';
import ClickAnimate from '../CickAnimate/ClickAnimate';
import { WrapButton } from './commonStyled';

function ButtonRipple({ children, variant = 'contained', buttonAndButton = '12px', bg = 'var(--primary)', ...props }) {
  return (
    <WrapButton
      variant={variant}
      rippleColor={'red'}
      bg={bg}
      buttonAndButton={buttonAndButton}
      className="d-inline-block cursor-pointer border-0 overflow-hidden"
      {...props}
    >
      <ClickAnimate
        className="py-6 px-12"
        rippleColor={variant === 'outline' || variant === 'text' ? bg : 'rgba(255, 255, 255,0.7)'}
        style={{ width: 'auto' }}
      >
        {children}
      </ClickAnimate>
    </WrapButton>
  );
}

ButtonRipple.propTypes = {
  bg: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
  buttonAndButton: PropTypes.string,
  children: PropTypes.node,
};
export default ButtonRipple;
