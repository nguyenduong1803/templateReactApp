import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Drawer({ children, setDrawerActive, drawerActive }) {
  const handleSetDrawer = () => {
    window.document.body.style.overflow ="auto"
    setDrawerActive(false)
  }
  return (
    <>
      <Overlay className={drawerActive && 'active'} onClick={handleSetDrawer}></Overlay>
      <DrawerContent onClick={(e) => e.stopPropagation()} className={drawerActive ? 'moveIn' : 'moveOut'}>
        {children}
      </DrawerContent>
    </>
  );
}

Drawer.propTypes = {
  children: PropTypes.node,
  setDrawerActive: PropTypes.func,
  drawerActive: PropTypes.bool,
};

const DrawerContent = styled.aside`
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: #ffffff;
  width: 400px;
  height: 100%;
  left: -440px;
  padding: 24px;
  transition: all 0.3s;
  border: 1px solid rgba(249, 249, 249, 0.698);
  z-index: 100;
  &.moveIn {
    transform: translateX(400px);
  }
  &.moveOut {
    transform: translateX(0);
  }
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  width:100%;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(1, 1, 1, 0.4);
  visibility: hidden;
  opacity: 0;
  transition: 0.5s;
  z-index: 100;
  &.active {
    visibility: visible;
    opacity: 1;
  }
`;
