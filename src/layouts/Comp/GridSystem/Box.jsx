import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
function Box({
  h = 'auto',
  w = '100%',
  p,
  m,
  minHeight,
  maxHeight,
  minWidth,
  maxWidth,
  radius,
  bg = '#fff',
  children,
  sx = {},
  zIndex,
  position,
  border,
  boxShadow,
  display,
  hover,
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
const Wrap = styled.div`
  display: block;
  width: ${(props) => props.w};
  ${({ minWidth }) => minWidth && `min-width: ${minWidth};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  ${({ minHeight }) => minHeight && `min-height: ${minHeight};`}
  ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight};`}
  ${({ radius }) => radius && `border-radius: ${radius};`}
  ${({ position }) => position && `position: ${position};`}
  ${({ display }) => display && `display: ${display};`}
  ${({ zIndex }) => zIndex && `z-index: ${zIndex};`}
  ${({ border }) => border && `border: ${border};`}
  ${({ hover }) => hover && `&:hover{ ${hover}};`}
  ${({ h }) => h && `height: ${h};`}
  ${({ w }) => w && `width: ${w};`}
  ${({ m }) => m && `margin: ${m};`}
  ${({ p }) => p && `padding: ${p};`}
  
  background-color: ${(props) => props.bg};
  box-shadow: ${(props) => props.boxShadow};
`;
export default Box;
