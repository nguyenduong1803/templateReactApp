import React from 'react';
import Image from '~/components/Atom/Image/Image';
import Paper from '~/layouts/Styled/Paper';

function ImageAds() {
  return (
    <Paper className='section-space p-12 cursor-pointer'>
      <div className='d-flex gap-24'>
        <Image
          w='20rem'
          src='https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        />
        <div>
          <p>Shutterstock Free Trial - Get images, video, music & easy to use design tools with one subscription. </p>
          <p className='fz-14'>ads via Carbon</p>
        </div>
      </div>
    </Paper>
  );
}

export default ImageAds;
