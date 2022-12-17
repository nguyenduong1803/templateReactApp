import React from 'react'
import ClickAnimate from '../CickAnimate/ClickAnimate'
import Image from '../Image/Image'

function Avatar(props) {
    return (
        <ClickAnimate rippleColor='var(--primary)' style={{ borderRadius: "50%", width: "40px", height: "40px" }} {...props} >
            <Image style={{ pointerEvents: "none", boderRadius: "50%" }} src="https://minimal-kit-react.vercel.app/assets/images/avatars/avatar_default.jpg" />
        </ClickAnimate>
    )
}

export default Avatar