import React from 'react';
import CommonStyled, { commonProps } from './common';

function Section({ h, w, p, m, row, bg, children, radius, className = '', sx, border, ...props }) {
  return (
    <CommonStyled
      w={w}
      h={h}
      m={m}
      p={p}
      bg={bg}
      radius={radius}
      border={border}
      className={`${className} ${row && 'row'}`}
      sx={sx}
      {...props}
    >
      {children}
    </CommonStyled>
  );
}
Section.propTypes = commonProps;
export default Section;
