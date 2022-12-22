import { useRef, useState } from 'react';
import styled from 'styled-components';
//
import { BarIcon, NotifyIcon, SearchSvg } from '~/assets/svg';
import Avatar from '~/components/Atom/Avatar/Avatar';
import InputText from '~/components/Atom/Input/InputText';
import { Box } from '../GridSystem';

export default function Header() {
  const [menuShow, setMenuShow] = useState(false);
  const refNav = useRef();
  return (
    <>
      <Wrap className="position-fixed bg-white w-100 t-0 r-0">
        <div className="d-flex j-between a-center h-100" style={{zIndex:100,padding:"0 2.4rem 0 32.4rem"}}>
          <div className="center ">
            <InputText
              style={{ paddingLeft: '4rem', width: '400px', backgroundColor: 'var(--bg-default)' }}
              placeholder="Search..."
              Icon={SearchIcon}
            />
            {/* {header.map(item => {
                return (
                  <li key={item.name}><LinkMenu to={item.path}>{item.name}</LinkMenu></li>)
              })} */}
          </div>
          <Nav
            style={menuShow ? { maxHeight: `${refNav.current.scrollHeight}px` } : {}}
            className="d-flex j-end "
            ref={refNav}
          >
            <div className="login d-flex a-center j-flex-end gap-24 ">
              <img src="https://minimal-kit-react.vercel.app/assets/icons/ic_flag_en.svg" alt="" />
              <NotifyIcon />
              <Avatar />
            </div>
          </Nav>
          <Bar onClick={() => setMenuShow((prev) => !prev)} />
        </div>
      </Wrap>
      <Box h="65px" className="position-relative"></Box>
    </>
  );
}
const Wrap = styled.header`
  top: 0;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  height: 60px;
  width: 100%;
  backdrop-filter: blur(6px);
  background-color: rgba(249, 250, 251, 0.7);
  z-index: 150;
`;
const Nav = styled.nav`
  flex: 1;
  flex-grow: 1;
  transition: all 0.25s;
  @media (max-width: 61.9375em) {
    display: block;
    position: absolute;
    top: 100%;
    z-index: 30;
    left: 0;
    width: 100%;
    height: auto;
    max-height: 0;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(235, 235, 235, 0.7);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const Bar = styled(BarIcon)`
  cursor: pointer;
  @media (min-width: 62em) {
    display: none;
    padding: 12px;
  }
  &:hover {
    opacity: 0.7;
  }
`;
const SearchIcon = styled(SearchSvg)`
  width: 18px;
  height: 18px;
  fill: #444444;
  z-index: 10;
`;
