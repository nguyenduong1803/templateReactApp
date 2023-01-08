import React, { useEffect, useRef, useState } from 'react';

import HighligtCode from '~/pages/HighligtCode';
import ActionComponent from '../Molecule/ActionComponent';

function BaseComponent({ title, description, mockData, children }) {
  const [open, setOpen] = useState(false);

  return (
    <section className='section-space'>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className='border radius-6 p-24 mt-24 mb-6 d-flex j-center gap-24'>{children}</div>
      <ActionComponent setOpen={setOpen} />
      <HighligtCode open={open} codeString={mockData} />
    </section>
  );
}

export default BaseComponent;
