import React from 'react';
import styled from 'styled-components';
import CommonStyled from './commonStyled';

function PositionItem({ children, zIndex, bottom, left, top, right, position, h, w, p, m, bg, sx, ...props }) {
  return (
    <Wrap
      top={top}
      right={right}
      left={left}
      bottom={bottom}
      zIndex={zIndex}
      position={position}
      w={w}
      h={h}
      m={m}
      p={p}
      bg={bg}
      sx={sx}
      {...props}
    >
      {children}
    </Wrap>
  );
}
const Wrap = styled(CommonStyled)((props) => {
  return {
    right: props.right,
    left: props.left,
    bottom: props.bottom,
    top: props.top,
    zIndex: props.zIndex,
  };
});
export default PositionItem;
