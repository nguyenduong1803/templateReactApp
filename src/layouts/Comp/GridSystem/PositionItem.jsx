import React from 'react'
import styled from "styled-components"
import { CommonProps } from './CommonStyled'

function PositionItem({
    children,
    zIndex,
    bottom,
    left,
    top,
    right,
    position,
    h,
    w,
    p,
    m,
    bg,
    ...props

}) {
    return (
        <Wrap
            top={top}
            right={right}
            left={left}
            bottom={bottom}
            zIndex={zIndex}
            position={position}
            w={w}
            h={h}
            m={m}
            p={p}
            bg={bg}
            {...props}
        >
            {children} </Wrap >
    )
}
const Wrap = styled(CommonProps)`

`
export default PositionItem