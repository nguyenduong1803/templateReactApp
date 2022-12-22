import React from 'react';
import styled from 'styled-components';
import { CommonProps } from './CommonStyled';

function Stack({ children, gap, direction,bg, hover, justify, alignItems, w, h, m, p, wrap, radius }) {
  return (
    <Wrap
      className="d-flex"
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
    >
      {children}
    </Wrap>
  );
}
const Wrap = styled(CommonProps)`
  display: flex;
  ${({ gap }) => gap && `gap: ${gap};`}
  ${({ direction }) => direction && `flex-direction: ${direction};`}
  ${({ justify }) => justify && `justify-content: ${justify};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ wrap }) => wrap && `flex-wrap: ${wrap};`}
`;

export default Stack;
