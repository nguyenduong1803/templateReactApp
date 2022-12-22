import { useState } from 'react';
import { Box } from '~/layouts/Comp/GridSystem';
import Button from '../../Atom/Button/Button';
import PropTypes from 'prop-types';

function  Dropdown({ children, mt = '0.6rem', w,setShowDropdown,showDropdown,...props }) {

  return (
    <div className="position-relative">
      <Button onClick={() => setShowDropdown(true)}>Show Drop</Button>
      <Box zIndex={300} onClick={() => setShowDropdown(false)} className={showDropdown && 'position-fixed full'}></Box>
      <Box
        w={w}
        zIndex={301}
        position="absolute"
        m={`${mt} 0 0 0`}
        onClick={(e) => e.stopPropagation()}
        className={showDropdown ? 'show' : 'hidden'}
        {...props}
      >
        {children}
      </Box>
    </div>
  );
}

Dropdown.propTypes = {
  my: PropTypes.string,
  children: PropTypes.node,
};
export default Dropdown;
