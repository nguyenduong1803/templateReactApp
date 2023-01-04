import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const useDebouncedRippleCleanUp = (rippleCount, duration, cleanUpFunction) => {
  useLayoutEffect(() => {
    let bounce = null;
    if (rippleCount > 0) {
      clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce);
      }, duration * 4);
    }

    return () => clearTimeout(bounce);
  }, [rippleCount, duration, cleanUpFunction]);
};

const Ripple = (props) => {
  const { duration, color } = props;
  const [rippleArray, setRippleArray] = useState([]);

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([]);
  });

  const addRipple = (event) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size = rippleContainer.width > rippleContainer.height ? rippleContainer.width : rippleContainer.height;
    const x = event.clientX - rippleContainer.x - size / 2;
    const y = event.clientY - rippleContainer.y - size / 2;
    const newRipple = {
      x,
      y,
      size
    };

    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <RippleContainer duration={duration} color={color} onMouseDown={addRipple}>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <span
              key={'span' + index}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size
              }}
            />
          );
        })}
    </RippleContainer>
  );
};

Ripple.propTypes = {
  duration: PropTypes.number,
  color: PropTypes.string
};

Ripple.defaultProps = {
  duration: 850,
  color: '#fff'
};
const RippleContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  span {
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.3;
    background-color: ${(props) => props.color};
    animation-name: ripple;
    animation-duration: ${(props) => props.duration}ms;
    pointer-events: none;
  }

  @keyframes ripple {
    from {
      transform: scale(0);
      opacity: 0.5;
    }
    to {
      transform: scale(3);
      opacity: 0;
    }
  }
`;
export default Ripple;
