import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// 
import { BarIcon, NotifyIcon } from '~/assets/svg'
import Avatar from '~/components/Atom/Avatar/Avatar'
import Image from '~/components/Atom/Image/Image'
import InputText from '~/components/Atom/Input/InputText'
import { SearchSvg } from "~/assets/svg"

export default function Header() {
  const [menuShow, setMenuShow] = useState(false);
  const refNav = useRef()
  return (
    <>
      <Wrap className="position-fixed bg-white r-0 l-0 t-0">
        <div className="container d-flex j-between ">
          <WrapLogo to="/" className="logo">
            <Image src="ádf" alt="" />
          </WrapLogo>
          <Nav
            style={menuShow ? { maxHeight: `${refNav.current.scrollHeight}px` } : {}}
            className="d-flex j-between "
            ref={refNav}
          >
            <Ul className="d-flex gap-12 center ">
              <InputText style={{ paddingLeft: "4rem",width:"400px",backgroundColor:"var(--bg-default)"}} Icon={SearchIcon} />
              {/* {header.map(item => {
                return (
                  <li key={item.name}><LinkMenu to={item.path}>{item.name}</LinkMenu></li>)
              })} */}
            </Ul>
            <div className="login d-flex center gap-24 md-mb-12">
              <NotifyIcon />
              <Avatar />
            </div>
          </Nav>
          <Bar onClick={() => setMenuShow(prev => !prev)} />
        </div>
      </Wrap>
      <div className="position-relative" style={{ height: '60px' }}></div>
    </>
  )
}
const Wrap = styled.header`
transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
height: 60px;
width:100%;
backdrop-filter: blur(6px);
background-color: rgba(249, 250, 251, 0.7);
z-index:100;
`
const WrapLogo = styled(Link)`
width:60px;
`
const Nav = styled.nav`
flex:1;
flex-grow: 1;
transition: all 0.25s;
@media (max-width: 61.9375em) {
  display: block;
  position: absolute;
  top:100%;
  z-index:30;
  left: 0;
  width: 100%;
  height: auto;
  max-height: 0;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(235, 235, 235, 0.7);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
`
const Ul = styled.ul`
flex:1;
@media (max-width: 61.9375em) {
  display: block;
  padding:24px;
}
`
const Bar = styled(BarIcon)`
cursor: pointer;
  @media (min-width: 62em) {
  display: none;
  padding:12px;
}
&:hover{
  opacity:0.7;
}
`
const SearchIcon = styled(SearchSvg)`
  width: 18px;
  height: 18px;
  fill: #444444;
  z-index: 10;
`;