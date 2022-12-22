import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CommonProps } from './CommonStyled';
function Box({
  h,
  w = '100%',
  p,
  m,
  minHeight,
  maxHeight,
  minWidth,
  maxWidth,
  radius,
  bg ,
  children,
  sx = {},
  zIndex,
  position,
  border,
  boxShadow,
  display,
  hover,
  bottom,
  left,
  top,
  right,
  ...props
}) {
  return (
    <Wrap
      style={sx}
      w={w}
      h={h}
      m={m}
      p={p}
      bg={bg}
      top={top}
      right={right}
      left={left}
      bottom={bottom}
      minHeight={minHeight}
      maxHeight={maxHeight}
      minWidth={minWidth}
      maxWidth={maxWidth}
      radius={radius}
      display={display}
      position={position}
      boxShadow={boxShadow}
      zIndex={zIndex}
      border={border}
      hover={hover}
      {...props}
    >
      {children}
    </Wrap>
  );
}
Box.propTypes = {
  w: PropTypes.string,
  h: PropTypes.string,
  bg: PropTypes.string,
  minHeight: PropTypes.string,
  minWidth: PropTypes.string,
  maxHeight: PropTypes.string,
  display: PropTypes.string,
  zIndex: PropTypes.number,
  maxWidth: PropTypes.string,
  hover: PropTypes.string,
  children: PropTypes.node,
};
const Wrap = styled(CommonProps)`
  display: block;
`;
export default Box;
