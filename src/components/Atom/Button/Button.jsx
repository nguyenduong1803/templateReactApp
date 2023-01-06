import React from 'react';
import PropTypes from 'prop-types';
import { WrapButton } from './commonStyled';
import Ripple from '../Ripple/Ripple';
import Loading from './Loading';

export default function Button(props) {
  const { children, variant, className, ripple, sideBySide, bg, duration, loading, ...passProps } = props;
  return (
    <WrapButton
      variant={variant}
      bg={bg}
      sideBySide={sideBySide}
      className={`py-6 px-12 ${className} overflow-hidden ${loading ? 'loading' : ''}`}
      disabled={loading}
      {...passProps}
    >
      {children}
      {loading && <Loading color='#fff' />}
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
