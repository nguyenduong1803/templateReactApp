import { Box } from '~/layouts/Comp/GridSystem';
import PropTypes from 'prop-types';

function Dropdown({ children, mt = '0.6rem', w, setShowDropdown, showDropdown,right, ...props }) {
  return (
    <div className="position-relative">
      <Box zIndex={300} onClick={() => setShowDropdown(false)} className={showDropdown && 'position-fixed full'}></Box>
      <Box
        right={right}
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
  setShowDropdown: PropTypes.func,
  showDropdown: PropTypes.bool,
  children: PropTypes.node,
};
export default Dropdown;
