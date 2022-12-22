import React from 'react'
import ClickAnimate from '../CickAnimate/ClickAnimate'
import Image from '../Image/Image'

function Avatar(props) {
    return (
        <ClickAnimate  rippleColor='rgba(98, 98, 98, 0.5)' style={{ borderRadius: "50%", width: "40px", height: "40px" }} {...props} >
            <Image style={{ pointerEvents: "none"}} className="radius-50  cursor-pointer" src="https://minimal-kit-react.vercel.app/assets/images/avatars/avatar_default.jpg" />
        </ClickAnimate>
    )
}

export default Avatar