import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
function Paper({ children, elevation = 1 }) {
  const papers = [
    /*0*/ 'unset',
    /*1*/ 'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;',
    /*2*/ 'rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;',
    /*3*/ 'rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;',
    /*4*/ 'rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px',
    /*5*/ 'rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px',
    /*6*/ 'rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px',
    /*7*/ 'rgb(0 0 0 / 20%) 0px 8px 10px -5px, rgb(0 0 0 / 14%) 0px 16px 24px 2px, rgb(0 0 0 / 12%) 0px 6px 30px 5px',
  ];

  return <WrapPaper boxShadow={papers[Number(elevation)]}>{children}</WrapPaper>;
}

Paper.propTypes = {
  elevation: PropTypes.number,
  children: PropTypes.node
}
const WrapPaper = styled.section`
  background-color: rgb(255, 255, 255);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: ${(props) => props.boxShadow};
  font-weight: 400;
  line-height: 60px;
  letter-spacing: 0.01071em;
  text-align: center;
  color: var(--paper-color);
  height: 60px;
`;
export default Paper;
