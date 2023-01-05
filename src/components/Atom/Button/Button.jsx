import React from 'react';
import PropTypes from 'prop-types';
import { WrapButton } from './commonStyled';
import Ripple from '../Ripple/Ripple';

export default function Button(props) {
  const { children, variant, className, ripple, buttonAndButton, bg, duration, ...passProps } = props;
  return (
    <WrapButton
      variant={variant}
      bg={bg}
      buttonAndButton={buttonAndButton}
      className={`py-6 px-12 ${className} overflow-hidden`}
      {...passProps}
    >
      {children}
      {ripple && <Ripple color={variant === 'contained' ? 'white' : bg} />}
    </WrapButton>
  );
}

Button.propTypes = {
  bg: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
  buttonAndButton: PropTypes.string,
  children: PropTypes.node.isRequired,
  duration: PropTypes.number
};
Button.defaultProps = {
  variant: 'contained',
  className: '',
  buttonAndButton: '12px',
  bg: 'primary'
};
