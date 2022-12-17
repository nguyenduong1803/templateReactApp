import React from 'react'
import styled from "styled-components"
const Wrap = styled.div`
position: relative;
top: 100%;
    &:hover>.childrenTippy{
    visibility: visible;
    opacity: 1;
    }
`
const Tip = styled.div`
position: absolute;
visibility: hidden;
opacity: 0;
background-color: #fff;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
border-radius:4px;
transition: .4s;
width: 100%;
padding: 12px;
z-index: 100;

`
function Tippy({ children, title, ...passProps }) {
    return (
        <Wrap>
            <h2 {...passProps}>{title}</h2>
            <Tip className="childrenTippy">{children}</Tip>
        </Wrap>
    )
}

export default Tippy