import styled from 'styled-components';
import CommonProps from './commonStyled';

function Container({ children, container = 'container', p, className = '', ...props }) {
  return (
    <Wrap p={p} className={`${container} ${className}`} {...props}>
      {children}
    </Wrap>
  );
}
const Wrap = styled(CommonProps)``;
export default Container;
