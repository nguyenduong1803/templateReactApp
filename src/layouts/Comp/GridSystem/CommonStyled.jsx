import styled from 'styled-components';

const CommonStyled = styled.div`
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
  ${({ top }) => top && `top: ${top};`}
  ${({ bottom }) => bottom && `bottom: ${bottom};`}
  ${({ left }) => left && `left: ${left};`}
  ${({ right }) => right && `right: ${right};`}
  ${({ border }) => border && `border: ${border};`}
  ${({ overflow }) => overflow && `overflow: ${overflow};`}
  background-color: ${(props) => props.bg};
`;
const CommonStyled2 = styled.div((props) => ({
  minHeight: props.mh,
  maxHeight: props.maxHeight,
  minWidth: props.minWidth,
  maxWidth: props.maxWidth,
  height: props.height,
  width: props.width,
  margin: props.margin,
  padding: props.padding,
  display: props.display,
  position: props.position,
  overflow: props.overflow,
  backgroundColor: props.bg,
  border: props.border,
  radius: props.radius,
  zIndex: props.zIndex,
  ':hover': props.hover,
  ':after': props.after,
  ':before': props.before,
  ...props.sx,
}));
export default CommonStyled;
