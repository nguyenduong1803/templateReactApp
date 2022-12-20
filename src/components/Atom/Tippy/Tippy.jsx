import React from 'react'
import styled from "styled-components"
import Paper from '~/layouts/Styled/Paper'

const Wrap = styled.div`
position: relative;
cursor: pointer;
top: 100%;
    &:hover>.childrenTippy{
    visibility: visible;
    opacity: 1;
    }
`
const Tip = styled(Paper)`
position: absolute;
visibility: hidden;
opacity: 0;
background-color: #fff;
border-radius:4px;
transition: .4s;
width: 100%;
padding: 12px;
z-index: 100;

`
function Tippy({ children,elevation=1, title, ...passProps }) {
    return (
        <Wrap>
            <p {...passProps}>{title}</p>
            <Tip elevation={elevation} className="childrenTippy">{children}</Tip>
        </Wrap>
    )
}

export default Tippy