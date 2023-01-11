import { createGlobalStyle } from 'styled-components';

const StyleBaseLine = createGlobalStyle`
#nprogress {
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100%;
}

#nprogress .bar {
  background-color: #2fac66;
  width: 100%;
  height: 0.3rem;
}
`;

export default StyleBaseLine