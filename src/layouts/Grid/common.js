import styled from 'styled-components';
import PropTypes from 'prop-types';
const setStyleComponent = (props) => {
  return {
    backgroundColor: props.bg,
    border: props.border,
    height: props.h,
    width: props.w,
    padding: props.p,
    margin: props.m,
    display: props.display,
    overflow: props.overflow,
    borderRadius: props.radius,
    right: props.right,
    left: props.left,
    bottom: props.bottom,
    top: props.top,
    zIndex: props.zIndex,
    position: props.position,
    ':hover': props.hover,
    ':after': props.after,
    ':before': props.before,
    ...props.sx,
    '@media  (max-width: 35.9375em)': props.xs,
    '@media (min-width: 36em)': props.sm,
    '@media (min-width: 48em)': props.md,
    '@media (min-width: 62em)': props.lg,
    '@media (min-width: 75em)': props.xl,
    '@media (min-width: 87.5em)': props.xxl
  };
};
const CommonStyled = styled.div(setStyleComponent);
// common Props
export const commonProps = {
  w: PropTypes.string,
  h: PropTypes.string,
  m: PropTypes.string,
  p: PropTypes.string,
  bg: PropTypes.string,
  border: PropTypes.string,
  boxShadow: PropTypes.string,
  overflow: PropTypes.string,
  minHeight: PropTypes.string,
  minWidth: PropTypes.string,
  maxHeight: PropTypes.string,
  display: PropTypes.string,
  zIndex: PropTypes.number,
  maxWidth: PropTypes.string,
  hover: PropTypes.string,
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
  position: PropTypes.string,
  top: PropTypes.string,
  bottom: PropTypes.string,
  right: PropTypes.string,
  left: PropTypes.string,
  xl: PropTypes.object,
  lg: PropTypes.object,
  md: PropTypes.object,
  sm: PropTypes.object,
  xs: PropTypes.object
};
export default CommonStyled;
