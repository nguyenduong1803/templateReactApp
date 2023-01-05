import React from 'react';
import styled from 'styled-components';
import CommonStyled from './common';

function Stack({ children, gap, direction, bg, hover, justify, alignItems, w, h, m, p, wrap, radius, ...props }) {
  return (
    <Wrap
      className='d-flex'
      gap={gap}
      direction={direction}
      justify={justify}
      alignItems={alignItems}
      hover={hover}
      w={w}
      h={h}
      m={m}
      p={p}
      radius={radius}
      wrap={wrap}
      bg={bg}
      {...props}
    >
      {children}
    </Wrap>
  );
}
const Wrap = styled(CommonStyled)((props) => {
  return {
    display: props.display,
    flexDirection: props.direction,
    justifyContent: props.justify,
    alignItems: props.alignItems,
    gap: props.gap
  };
});

export default Stack;
