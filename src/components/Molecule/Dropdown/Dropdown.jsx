import PropTypes from 'prop-types';
import Position from '~/layouts/Grid/Position';

function Dropdown({ children, mt = '0.6rem', w, setShowDropdown, showDropdown, right, ...props }) {
  return (
    <div className='position-relative'>
      <div
        onClick={() => setShowDropdown(false)}
        className={showDropdown ? 'position-fixed full zIndex-400' : ''}
      ></div>
      <Position
        right={right}
        w={w}
        m={`${mt} 0 0 0`}
        position='absolute'
        zIndex={310}
        onClick={(e) => e.stopPropagation()}
        className={showDropdown ? 'show' : 'hidden'}
        {...props}
      >
        {children}
      </Position>
    </div>
  );
}

Dropdown.propTypes = {
  my: PropTypes.string,
  setShowDropdown: PropTypes.func,
  showDropdown: PropTypes.bool,
  children: PropTypes.node
};
export default Dropdown;
