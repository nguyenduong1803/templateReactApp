import React from 'react';
import Image from '../Image/Image';
import Ripple from '../Ripple/Ripple';

function Avatar(props) {
  return (
    <div className='overflow-hidden position-relative radius-50' style={{ width: '40px', height: '40px' }} {...props}>
      <Image
        style={{ pointerEvents: 'none' }}
        className='radius-50  cursor-pointer'
        src='https://minimal-kit-react.vercel.app/assets/images/avatars/avatar_default.jpg'
      />
      <Ripple />
    </div>
  );
}

export default Avatar;
