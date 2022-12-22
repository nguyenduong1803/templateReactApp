import styled from "styled-components"

export const CommonProps = styled.div`
  ${({ minWidth }) => minWidth && `min-width: ${minWidth};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  ${({ minHeight }) => minHeight && `min-height: ${minHeight};`}
  ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight};`}
  ${({ radius }) => radius && `border-radius: ${radius};`}
  ${({ position }) => position && `position: ${position};`}
  ${({ zIndex }) => zIndex && `z-index: ${zIndex};`}
  ${({ border }) => border && `border: ${border};`}
  ${({ hover }) => hover && `&:hover{ ${hover}};`}
  ${({ h }) => h && `height: ${h};`}
  ${({ w }) => w && `width: ${w};`}
  ${({ m }) => m && `margin: ${m};`}
  ${({ p }) => p && `padding: ${p};`}
  
  background-color: ${(props) => props.bg};
`;