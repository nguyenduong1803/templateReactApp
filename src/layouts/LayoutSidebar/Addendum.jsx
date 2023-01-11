import React from 'react';
import { Box } from '../Grid';

function Addendum() {
  return (
    <Box m='65px 0 0 0' className='vh-100 position-fixed t-0 zIndex-100 '>
      <ul>
        <li>
          <a className='line-height-32 d-block' href='/'>
            Basic Accodion
          </a>
        </li>
        <li>
          <a className='line-height-32 d-block' href='/'>
            Controlled accordion
          </a>
        </li>
        <li>
          <a className='line-height-32 d-block' href='/'>
            Customization
          </a>
        </li>
        <li>
          <a className='line-height-32 d-block' href='/'>
            Performance
          </a>
        </li>
        <li>
          <a className='line-height-32 d-block' href='/'>
            Accessibility
          </a>
        </li>
        <li>
          <a className='line-height-32 d-block' href='/'>
            API
          </a>
        </li>
      </ul>
    </Box>
  );
}

export default Addendum;
