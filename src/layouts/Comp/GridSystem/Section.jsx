import React from 'react';
import styled from 'styled-components';
import CommonStyled from './CommonStyled';

function Section({ h, w, p, m, bg, radius, className = '', ...props }) {
  return <Wrap w={w} h={h} m={m} p={p} bg={bg} radius={radius} className={className} {...props}></Wrap>;
}

const Wrap = styled(CommonStyled)``;
export default Section;
