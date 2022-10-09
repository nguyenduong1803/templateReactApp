import styled from "styled-components"
import PropTypes from "prop-types";
const DrawerContent = styled.aside`
    position: absolute;
    top: 0;
    height: 100%;
    bottom: 0;
    background-color: #ffffff;
    width: 400px;
    height: 100%;
    left: -440px;
    padding: 24px;
    transition:all 0.3s ;
    border:1px solid rgba(249, 249, 249, 0.698);
    z-index:100;
    &.moveIn{
        transform: translateX(400px);
    }
    &.moveOut{
        transform: translateX(0);
    }
`
const Overlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(1,1,1,0.4);
    visibility: hidden;
    opacity: 0;
    transition:.5s;
    z-index:100;
    &.active{
        visibility: visible;
        opacity: 1;
    }
`
function Drawer({ children, setDrawerActive, drawerActive }) {
    return (<>
        <Overlay className={drawerActive && "active"} onClick={() => setDrawerActive(false)}>
        </Overlay>
        <DrawerContent
            onClick={e => e.stopPropagation()}
            className={drawerActive ? "moveIn" : "moveOut"}
        >
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
export default Drawer