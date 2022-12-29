import React from 'react';
import CommonStyled from './commonStyled';

function Section({ h, w, p, m, bg, children, radius, className = '', sx, ...props }) {
  return (
    <CommonStyled w={w} h={h} m={m} p={p} bg={bg} radius={radius} className={className} sx={sx} {...props}>
      {children}
    </CommonStyled>
  );
}

export default Section;
