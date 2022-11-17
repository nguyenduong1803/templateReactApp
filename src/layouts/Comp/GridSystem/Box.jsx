import React from 'react';
import styled from 'styled-components';
function Box({ h = 'auto', w = 'auto', radius="none", children }) {
  const Wrap = styled.div`
    width: ${() => w};
    height: ${() => h};
    border-radius:${()=>radius};
  `;
  return <Wrap>{children}</Wrap>;
}

export default Box;
