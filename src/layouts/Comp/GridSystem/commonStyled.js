import styled from 'styled-components';

const setStyleComponent = ({ radius, ...props }) => {
  return {
    backgroundColor: props.bg,
    border: props.border,
    height: props.h,
    width: props.w,
    padding: props.p,
    margin: props.m,
    overflow: props.overflow,
    borderRadius: props.radius,
    ':hover': props.hover,
    ':after': props.after,
    ':before': props.before,
    ...props.sx,
    '@media  (max-width: 35.9375em)': props.xs,
    '@media (min-width: 36em)': props.sm,
    '@media (min-width: 48em)': props.md,
    '@media (min-width: 62em)': props.lg,
    '@media (min-width: 75em)': props.xl,
    '@media (min-width: 87.5em)': props.xxl,
  };
};
const CommonStyled = styled.div(setStyleComponent);

export default CommonStyled;
