import React from 'react';
import styled from 'styled-components';

function Stack({ children, gap, direction, hover, justify, alignItems, w, h, m, p, wrap,radius }) {
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
    >
      {children}
    </Wrap>
  );
}
const Wrap = styled.div`
  ${({ gap }) => gap && `gap: ${gap};`}
  ${({ direction }) => direction && `flex-direction: ${direction};`}
  ${({ justify }) => justify && `justify-content: ${justify};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ h }) => h && `height: ${h};`}
  ${({ w }) => w && `width: ${w};`}
  ${({ m }) => m && `margin: ${m};`}
  ${({ p }) => p && `padding: ${p};`}
  ${({ wrap }) => wrap && `flex-wrap: ${wrap};`}
  ${({ position }) => position && `position: ${position};`}
  ${({ display }) => display && `display: ${display};`}
  ${({ zIndex }) => zIndex && `z-index: ${zIndex};`}
  ${({ border }) => border && `border: ${border};`}
    ${({ hover }) => hover && `&:hover{ ${hover}};`}
    ${({ radius }) => radius && `border-radius: ${radius};`}

`;

export default Stack;
