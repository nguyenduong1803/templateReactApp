import PropTypes from 'prop-types';
import PositionItem from '~/layouts/Comp/GridSystem/PositionItem';

function Dropdown({ children, mt = '0.6rem', w, setShowDropdown, showDropdown, right, ...props }) {
  return (
    <div className='position-relative'>
      <div onClick={() => setShowDropdown(false)} className={showDropdown && 'position-fixed full'}></div>
      <PositionItem
        right={right}
        w={w}
        zIndex={301}
        m={`${mt} 0 0 0`}
        position='absolute'
        onClick={(e) => e.stopPropagation()}
        className={showDropdown ? 'show' : 'hidden'}
        {...props}
      >
        {children}
      </PositionItem>
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
