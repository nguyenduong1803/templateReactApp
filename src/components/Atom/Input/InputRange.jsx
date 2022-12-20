import React from 'react';
import styled from 'styled-components';

export default function InputRange({color="var(--primary)",...props}) {
  return <Input color={color} type="range" {...props}></Input>;
}

const Input = styled.input`
  outline: 0;
  border: 0;
  border-radius: 500px;
  width: 400px;
  max-width: 100%;
  margin: 12px 0 16px;
  transition: box-shadow 0.2s ease-in-out;
  // Chrome
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    outline: 0;
    border: 0;
    border-radius: 500px;
    width: 400px;
    max-width: 100%;
    margin: 12px 0 16px;
    transition: box-shadow 0.2s ease-in-out;
    // Chrome
    @media screen and (-webkit-min-device-pixel-ratio: 0) {
      & {
        overflow: hidden;
        height: 20px;
        -webkit-appearance: none;
        background-color: #ddd;
      }
      &::-webkit-slider-runnable-track {
        height: 20px;
        -webkit-appearance: none;
        color: #444;
        // margin-top: -1px;
        transition: box-shadow 0.2s ease-in-out;
      }
      &::-webkit-slider-thumb {
        width: 20px;
        -webkit-appearance: none;
        height: 20px;
        cursor: ew-resize;
        background: #fff;
        box-shadow: -340px 0 0 330px ${(props)=>props.color}, inset 0 0 0 20px ${(props)=>props.color};
        border-radius: 50%;
        transition: box-shadow 0.2s ease-in-out;
        position: relative;
        // top: 1px;
      }
      &:active::-webkit-slider-thumb {
        background: #fff;
        box-shadow: -340px 0 0 330px ${(props)=>props.color}, inset 0 0 0 3px ${(props)=>props.color};
      }
    }
    // Firefox
    &::-moz-range-progress {
      background-color: #43e5f7;
    }
    &::-moz-range-track {
      background-color: #9a905d;
    }
    // IE
    &::-ms-fill-lower {
      background-color: #43e5f7;
    }
    &::-ms-fill-upper {
      background-color: #9a905d;
    }
  }
`;
