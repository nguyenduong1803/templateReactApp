import styles from './button.module.css';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

let typeHtml = 'button';
const Button2 = ({ to, href, children, onClick, bg = 'var(--primary)', ...passProps }) => {
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
      ripple.forEach((item) => {
        item.remove();
      });
    }, 300);
  };
  const props = { onClick, bg, ...passProps };
  if (to) {
    props.to = to;
    typeHtml = Link;
  } else if (href) {
    props.href = href;
    typeHtml = 'a';
  }
  return (
    <Wrap onClick={createRipple}>
      <ButtonComp {...props} className="button">
        {children}
      </ButtonComp>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: inline-block;
  width: 200px;
`;
const ButtonComp = styled(typeHtml)`
  position: relative;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  border: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  background-color: ${(props) => props.bg};
  color: #fff;
  min-width: 80px;
  height: 40px;
  user-select: none;
  cursor: pointer;
  text-align: center;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 0.2s linear,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
  }
`;

export default Button2;
