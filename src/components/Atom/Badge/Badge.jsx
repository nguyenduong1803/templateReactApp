import React from 'react'
import styled from 'styled-components'
function Badge({ children, number, w = "1.8rem", h = "1.8rem", top = "-0.7rem", color = "#fff;", right = "-0.7rem", bottom, left, bg = 'var(--text-danger)', ...props }) {

    return (
        <div className="position-relative" {...props}>
            <WrapBage className="position-absolute text-center fz-14"
                h={h}
                w={w}
                color={color}
                top={top}
                right={right}
                bottom={bottom}
                left={left}
                bg={bg}
                {...props}
            >{number}</WrapBage>
            {children}
        </div>
    )
}

const WrapBage = styled.div`
    background-color: var(--text-danger);
    ${({ right }) => right && `right: ${right};`}
    ${({ left }) => left && `left: ${left};`}
    ${({ top }) => top && `top: ${top};`}
    ${({ bottom }) => bottom && `bottom: ${bottom};`}
    width: ${({ w }) => w};
    height:${({ h }) => h};
    line-height: ${({ h }) => h};
    border-radius:50%;
    color:${({ color }) => color};
    ${({ bg }) => bg && `background-color: ${bg};`}
     
`
export default Badge