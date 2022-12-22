import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import  CommonStyled  from './CommonStyled';
function Box({
  h,
  w,
  p,
  m,
  minHeight,
  maxHeight,
  minWidth,
  maxWidth,
  radius,
  bg,
  children,
  sx = {},
  position,
  border,
  boxShadow,
  display,
  hover,
  zIndex,
  bottom,
  left,
  top,
  right,
  overflow,
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
      zIndex={zIndex}
      position={position}

      minHeight={minHeight}
      maxHeight={maxHeight}
      minWidth={minWidth}
      maxWidth={maxWidth}
      radius={radius}
      display={display}
      boxShadow={boxShadow}
      border={border}
      overflow={overflow}
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
const Wrap = styled(CommonStyled)`
  display: block;
  background-color: ${(props) => props.bg};
  width:  ${({ w }) => w};
  height:  ${({ h }) => h};
  margin:  ${({ m }) => m};
  padding:  ${({ p }) => p};
`;
export default Box;
