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
background-color:red;
transition: .4s;
`
function Tippy({ children, Title }) {
    return (
        <Wrap>
            <Title />
            <Tip className="childrenTippy">{children}</Tip>
        </Wrap>
    )
}

export default Tippy