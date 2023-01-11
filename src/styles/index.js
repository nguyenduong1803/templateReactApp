import './RessetCss.css';
import './Responsive.css';
import './GlobalStyle.css';
import './BreakPoint.css';
import { memo } from 'react';

function GlobalStyle({ children }) {
  return <>{children}</>;
}
export default memo(GlobalStyle)
