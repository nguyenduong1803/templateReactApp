import styles from './ClickAnimate.module.css';
import styled from 'styled-components';

const ClickAnimate = ({ children }) => {
    const createRipple = (e) => {
        let circle = document.createElement('span');
        circle.classList.add(styles.circle);
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
        <Wrap>
            <Ripple onClick={createRipple}>
                {children}
            </Ripple>
        </Wrap>
    );
};
const Wrap = styled.div`
    overflow: hidden;
    position: relative;
    
`
const Ripple = styled.div`
  display: inline-block;
  width: 200px;
`;

export default ClickAnimate;
