import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import styled from "styled-components"
import { ArrowUp } from '~/assets/svg';

const Wrap = styled(ArrowUp)`
    visibility: hidden;
    position:fixed;
    bottom: 10px;
    right: 10px;
    transition: .3s;
    animation:bounce2 2s infinite;
    cursor: pointer;
    @keyframes bounce2 {
	0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
	40% {transform: translateY(-7px);}
	60% {transform: translateY(-3px);};
}
`
function ScrollToTop() {
    const [show, setShow] = useState(false);
    // handle scroll to show
    const handleScroll = () => {
        if (window.scrollY > 200) {
            (() => setShow(true))();
        } else {
            (() => setShow(false))();
        }
    }
    // handle scroll to top
    const handleClick = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [show])
    return (
        <Wrap
            style={show ? { visibility: 'visible', opacity: 1 } : { visibility: 'hidden', opacity: 0 }}
            onClick={handleClick}
        >ScrollToTop
        </Wrap>
    )
}

export default ScrollToTop