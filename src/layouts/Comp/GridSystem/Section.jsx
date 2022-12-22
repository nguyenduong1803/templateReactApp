import React from 'react'
import styled from 'styled-components'
import { CommonStyled } from './CommonStyled'

function Section({
    h,
    w,
    p,
    m,
    bg,
    radius,
    ...props
}) {
    return (
        <Wrap
            w={w}
            h={h}
            m={m}
            p={p}
            bg={bg}
            radius={radius}
            {...props}
        >

        </Wrap>
    )
}

const Wrap = styled(CommonStyled)`
    
`
export default Section