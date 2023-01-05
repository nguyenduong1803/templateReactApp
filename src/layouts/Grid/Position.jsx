import React from 'react';
import CommonStyled, { commonProps } from './common';

function Position({
  children,
  sx,
  zIndex,
  bottom,
  left,
  top,
  right,
  position,
  hover,
  h,
  w,
  p,
  m,
  bg,
  xl,
  lg,
  md,
  sm,
  xs,
  ...props
}) {
  return (
    <CommonStyled
      top={top}
      right={right}
      left={left}
      bottom={bottom}
      zIndex={zIndex}
      position={position}
      hover={hover}
      w={w}
      h={h}
      m={m}
      p={p}
      bg={bg}
      sx={sx}
      xl={xl}
      lg={lg}
      md={md}
      sm={sm}
      xs={xs}
      {...props}
    >
      {children}
    </CommonStyled>
  );
}

Position.propTypes = commonProps;
export default Position;
