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
  };
};
const CommonStyled = styled.div(setStyleComponent);

export default CommonStyled;
