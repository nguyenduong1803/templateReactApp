import styles from './ClickAnimate.module.css';

const ClickAnimate = ({
  children,
  rippleColor = 'rgb(255, 255, 255)',
  className = '',
  hover,
  cancel = true,
  ...props
}) => {
  const createRipple = (e) => {
    let circle = document.createElement('span');
    circle.classList.add(styles.circle);
    circle.style.backgroundColor = rippleColor;
    circle.style.opacity = '0.2';
    circle.style.top = e.nativeEvent.offsetY + 'px';
    circle.style.left = e.nativeEvent.offsetX + 'px';
    circle.style.width = e.target.clientWidth + 'px';
    circle.style.height = e.target.clientWidth + 'px';
    const ripple = document.querySelectorAll(`.${styles.circle}`);
    if (ripple) {
      ripple.forEach((item) => {
        item.remove();
      });
    }
    if (circle) {
      circle.onclick = () => {
        circle.remove();
      };
    }
    e.target.appendChild(circle);
    setTimeout(() => {
      const rippleClear = document.querySelectorAll(`.${styles.circle}`);
      rippleClear.forEach((item) => {
        item.remove();
      });
    }, 300);
  };
  return (
    <div className={`overflow-hidden d-inline-block position-relative cursor-pointer userSelect-none w-100`} {...props}>
      <div className={`w-100 ${className}`} onClick={cancel ? createRipple : () => {}}>
        {children}
      </div>
    </div>
  );
};
export default ClickAnimate;
