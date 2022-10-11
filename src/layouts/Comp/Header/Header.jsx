import  { useRef, useState } from 'react'
import { Link,NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { BarIcon } from '~/assets/svg'
import Image from '~/components/Image/Image'
const menu = [
  {
    name: "Home",
    path: "/"
  }, {
    name: "Product",
    path: "/product"
  }, {
    name: "About",
    path: "/about"
  }, {
    name: "Contacts",
    path: "/contacts"
  },
]
const Wrap = styled.header`
box-shadow: 0 8px 24px rgba(179, 179, 179, 0.4);
`
const LinkMenu = styled(NavLink)`
display:block;
color:var(--text-color);
font-size: 2rem;
border-radius:4px;
padding:4px 12px;
&.active{
background-color: var(--primary);
color:#fff;
}
@media (max-width: 61.9375em) {
padding:6px 0;
border-bottom: 1px solid rgba(233, 233, 233,0.8);
}
`
const WrapLogo = styled(Link)`
width:80px;
`
const Nav = styled.nav`
flex:1;
flex-grow: 1;
background-color: #ffffff;
transition: all 0.34s;
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
`
function Header() {
  const [menuShow,setMenuShow]=useState(false);
  const refNav = useRef()
  return (
   <Wrap className="position-relative mb-24">
      <div className="container d-flex j-between ">
        <WrapLogo to="/" className="logo">
          <Image src="ádf" alt="" />
        </WrapLogo>
        <Nav 
        style={menuShow?{maxHeight:`${refNav.current.scrollHeight}px`}:{}} 
        className="d-flex j-between "
        ref={refNav}
        >
          <Ul className="d-flex gap-12 center ">
            {menu.map(item => {
              return (
                <li key={item.name}><LinkMenu to={item.path}>{item.name}</LinkMenu></li>)
            })}
          </Ul>
          <div className="login d-flex center gap-12 md-mb-12">
            <LinkMenu to="/login">Login</LinkMenu>
            <LinkMenu to="/login">Register</LinkMenu>
          </div>
        </Nav>
        <Bar onClick={()=>setMenuShow(prev=>!prev)}/>
      </div>
   </Wrap>
  )
}

export default Header