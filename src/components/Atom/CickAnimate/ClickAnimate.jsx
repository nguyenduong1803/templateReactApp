import { useEffect, useRef } from 'react';
import styles from './ClickAnimate.module.css';

const ClickAnimate = ({
  children,
  rippleColor = 'rgba(255, 255, 255,0.3)',
  className = '',
  hover,
  cancel = true,
  ...props
}) => {
  const refTime = useRef();
  const createRipple = (e) => {
    let circle = document.createElement('span');
    circle.classList.add(styles.circle);
    circle.style.backgroundColor = rippleColor;
    circle.style.opacity = '0.3';
    circle.style.top = e.nativeEvent.offsetY + 'px';
    circle.style.left = e.nativeEvent.offsetX + 'px';
    circle.style.width = e.target.clientWidth + 'px';
    circle.style.height = e.target.clientWidth + 'px';
    e.target.appendChild(circle);
    console.log('clicked');
    refTime.current = setTimeout(() => {
      const rippleClear = document.querySelectorAll(`.${styles.circle}`);
      rippleClear.forEach((item) => {
        item.remove();
      });
    }, 500);
  };
  useEffect(() => {
    return () => {
      clearTimeout(refTime.current);
    };
  });
  return (
    <div
      className={`overflow-hidden d-inline-block position-relative cursor-pointer userSelect-none w-100 `}
      {...props}
    >
      <div className={`w-100 ${className}`} onClick={cancel ? createRipple : () => {}}>
        {children}
      </div>
    </div>
  );
};
export default ClickAnimate;
