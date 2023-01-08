import React from 'react';
import { CodeIcon, CodeSanbox, CopyIcon, ThreeDot } from '~/assets/svg';

function ActionComponent({ setOpen }) {
  return (
    <div className='d-flex j-end gap-12'>
      <div className='hover-circle' onClick={() => setOpen((prev) => !prev)}>
        <CodeIcon width='1.8rem' />
      </div>
      <div className='hover-circle'>
        <CodeSanbox width='1.8rem' />
      </div>
      <div className='hover-circle'>
        <CopyIcon width='1.8rem' />
      </div>
      <div className='hover-circle'>
        <ThreeDot width='1.8rem' />
      </div>
    </div>
  );
}

export default ActionComponent;
