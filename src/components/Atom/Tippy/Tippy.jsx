import React from 'react';
import styled from 'styled-components';
import Paper from '~/layouts/Styled/Paper';

const Wrap = styled.div`
  position: relative;
  cursor: pointer;
  top: 100%;
  &:hover > .childrenTippy {
    visibility: visible;
    opacity: 1;
  }
`;
const Tip = styled(Paper)`
  visibility: hidden;
  opacity: 0;
  background-color: var(--white);
  transition: 0.4s;
  z-index: 100;
`;
function Tippy({ children, elevation = 1, title, ...passProps }) {
  return (
    <Wrap>
      <p {...passProps}>{title}</p>
      <Tip elevation={elevation} className='childrenTippy position-absolute w-100 p-12 radius-4'>
        {children}
      </Tip>
    </Wrap>
  );
}

export default Tippy;
