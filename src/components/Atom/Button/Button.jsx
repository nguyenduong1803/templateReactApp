import React from 'react';
import PropTypes from 'prop-types';
import { WrapButton } from './commonStyled';
import Ripple from '../Ripple/Ripple';

export default function Button(props) {
  const { children, variant, className, ripple, sideBySide, bg, duration, ...passProps } = props;
  return (
    <WrapButton
      variant={variant}
      bg={bg}
      sideBySide={sideBySide}
      className={`py-6 px-12 ${className} overflow-hidden`}
      {...passProps}
    >
      {children}
      {ripple && <Ripple varColor={variant === 'contained' ? 'white' : bg} />}
    </WrapButton>
  );
}

Button.propTypes = {
  bg: PropTypes.string,
  variant: PropTypes.oneOf(['contained', 'text', 'outline']),
  className: PropTypes.string,
  sideBySide: PropTypes.string,
  children: PropTypes.node.isRequired,
  duration: PropTypes.number
};
Button.defaultProps = {
  variant: 'contained',
  className: '',
  sideBySide: '12px',
  bg: 'primary'
};
