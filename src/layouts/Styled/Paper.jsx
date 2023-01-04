import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Paper({
  children,
  elevation = 1,
  bg = 'var(--white)',
  minHeight = 'auto',
  h,
  overflow = 'hidden',
  r = 4,
  p,
  m,
  className = '',
  ...props
}) {
  const papers = [
    /*0*/ 'unset',
    /*1*/ 'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;',
    /*2*/ 'rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;',
    /*3*/ 'rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;',
    /*4*/ 'rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px',
    /*5*/ 'rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px',
    /*6*/ 'rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px',
    /*7*/ 'rgb(0 0 0 / 20%) 0px 8px 10px -5px, rgb(0 0 0 / 14%) 0px 16px 24px 2px, rgb(0 0 0 / 12%) 0px 6px 30px 5px',
    /*8*/ '0 2px 0 rgb(90 97 105 / 11%), 0 4px 8px rgb(90 97 105 / 12%), 0 10px 10px rgb(90 97 105 / 6%), 0 7px 70px rgb(90 97 105 / 10%);',
    /*9*/ 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
    /*10*/ 'rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;'
  ];

  return (
    <WrapPaper
      bg={bg}
      r={r}
      h={h}
      p={p}
      m={m}
      overflow={overflow}
      boxShadow={papers[Number(elevation)]}
      minHeight={minHeight}
      className={className}
      {...props}
    >
      {children}
    </WrapPaper>
  );
}

Paper.propTypes = {
  elevation: PropTypes.number,
  children: PropTypes.node,
  height: PropTypes.string,
  bg: PropTypes.string,
  h: PropTypes.string,
  r: PropTypes.number
};
const WrapPaper = styled.section`
  background-color: ${(props) => props.bg};
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: ${(props) => props.r}px;
  ${({ h }) => h && ` height: ${h};`}
  ${({ p }) => p && ` padding: ${p};`}
  ${({ m }) => m && ` margin: ${m};`}
  ${({ boxShadow }) => boxShadow && `box-shadow: ${boxShadow};`}
  ${({ overflow }) => overflow && `overflow: ${overflow};`}
  color: var(--paper-color);
  overflow: ${(props) => props.overflow};
`;
export default Paper;
