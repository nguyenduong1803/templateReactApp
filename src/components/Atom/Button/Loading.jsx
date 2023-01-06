import React from 'react';
import styled from 'styled-components';
function Loading() {
  return (
    <Wrap class='position-relative'>
      <div class='loader'>
        <Svg class='circular-loader' viewBox='25 25 50 50'>
          <Circle class='loader-path' cx='50' cy='50' r='20' fill='none' stroke='#71756f' stroke-width='10' />
        </Svg>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 200px;
`;
const Circle = styled.circle`
  stroke-dasharray: 150, 200;
  stroke-dashoffset: -10;
  -webkit-animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
  animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
  stroke-linecap: round;
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124;
    }
  }
  @-webkit-keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124;
    }
  }
  @-webkit-keyframes color {
    0% {
      stroke: #70c542;
    }
    40% {
      stroke: #70c542;
    }
    66% {
      stroke: #70c542;
    }
    80%,
    90% {
      stroke: #70c542;
    }
  }
  @keyframes color {
    0% {
      stroke: #70c542;
    }
    40% {
      stroke: #70c542;
    }
    66% {
      stroke: #70c542;
    }
    80%,
    90% {
      stroke: #70c542;
    }
  }
`;
const Svg = styled.svg`
  -webkit-animation: rotate 2s linear infinite;
  animation: rotate 2s linear infinite;
  height: 100%;
  -webkit-transform-origin: center center;
  -ms-transform-origin: center center;
  transform-origin: center center;
  width: 100%;
  top: 0;
  left: 0;
  margin: auto;
  @-webkit-keyframes rotate {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes rotate {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
export default Loading;
