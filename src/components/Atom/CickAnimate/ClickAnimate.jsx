import styles from './ClickAnimate.module.css';
import styled from 'styled-components';

const ClickAnimate = ({ children, rippleColor = "rgba(255, 255, 255, 0.5)", className = '', cancel = true, ...props }) => {
    const createRipple = (e) => {
        let circle = document.createElement('span');
        circle.classList.add(styles.circle);
        circle.style.backgroundColor = rippleColor
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
                circle.remove()
            }
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
        <Wrap {...props} className={className}>
            <Ripple onClick={cancel ? createRipple : () => {}} >
                {children}
            </Ripple>
        </Wrap>
    );
};
const Wrap = styled.div`
    cursor: pointer;
    overflow: hidden;
    position: relative;
    z-index:50;
    width: 100%;
    
`
const Ripple = styled.div`
  display: inline-block;
  width: 100%;
`;

export default ClickAnimate;
