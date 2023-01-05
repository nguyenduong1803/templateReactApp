import React from 'react';
import CommonStyled, { commonProps } from './common';

function Box(props) {
  const {
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
    sx,
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
    xl,
    lg,
    md,
    sm,
    xs,
    ...passProps
  } = props;
  return (
    <CommonStyled
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
      xl={xl}
      lg={lg}
      md={md}
      sm={sm}
      xs={xs}
      sx={sx}
      {...passProps}
    >
      {children}
    </CommonStyled>
  );
}
Box.propTypes = commonProps;
export default Box;
