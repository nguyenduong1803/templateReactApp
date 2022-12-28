import styled from 'styled-components';

const setStyleComponent = ({ radius, ...props }) => {
  return {
    backgroundColor: props.bg,
    border: props.border,
    height: props.h,
    width: props.w,
    padding: props.p,
    margin: props.m,
    borderRadius: props.radius,
    ':hover': props.hover,
    ':after': props.after,
    ':before': props.before,
    ...props,
    ...props.sx,
    '@media (min-width:62em)and (max-width: 74.9375em)': props.lg,
    '@media (min-width:48em)and (max-width: 61.9375em)': props.md,
    '@media (min-width: 36em) and (max-width: 47.9375em)': props.sm,
    '@media  (max-width: 35.9375em)': props.xs,
    
  };
};
const CommonStyled = styled.div(setStyleComponent);

export default CommonStyled;
