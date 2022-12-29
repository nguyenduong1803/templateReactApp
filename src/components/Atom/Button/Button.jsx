import React from 'react';
import PropTypes from 'prop-types';
import { WrapButton } from './commonStyled';

export default function Button({
  children,
  variant = 'contained',
  className = '',
  buttonAndButton = '12px',
  bg = 'var(--primary)',
  ...props
}) {
  return (
    <WrapButton
      variant={variant}
      bg={bg}
      buttonAndButton={buttonAndButton}
      className={`py-6 px-12 ${className}`}
      {...props}
    >
      {children}
    </WrapButton>
  );
}

Button.propTypes = {
  bg: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
  buttonAndButton: PropTypes.string,
  children: PropTypes.node
};
