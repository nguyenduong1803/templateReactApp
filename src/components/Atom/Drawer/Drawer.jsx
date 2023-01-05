import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Drawer({ children, setDrawerActive, drawerActive }) {
  const handleSetDrawer = () => {
    // window.document.body.style.overflow ="auto"
    setDrawerActive(false);
  };
  return (
    <>
      <div className={drawerActive ? 'overlay show position-fixed full' : 'hidden'} onClick={handleSetDrawer}></div>
      <DrawerContent onClick={(e) => e.stopPropagation()} className={drawerActive ? 'moveIn' : 'moveOut'}>
        {children}
      </DrawerContent>
    </>
  );
}

Drawer.propTypes = {
  children: PropTypes.node,
  setDrawerActive: PropTypes.func,
  drawerActive: PropTypes.bool
};

const DrawerContent = styled.aside`
  position: absolute;
  top: 0;
  background-color: var(--white);
  width: 400px;
  left: -440px;
  padding: 24px;
  top: 0;
  height: 100%;
  transition: all 0.3s;
  border: 1px solid var(--border-color);
  z-index: 302;
  &.moveIn {
    transform: translateX(400px);
  }
  &.moveOut {
    transform: translateX(0);
  }
`;
