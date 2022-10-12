import React from 'react'
import styled from 'styled-components';
const Input = styled.input`
    outline: 0;
		border: 0;
		border-radius: 500px;
		width: 400px;
		max-width: 100%;
		margin: 24px 0 16px;
		transition: box-shadow 0.2s ease-in-out;
// Chrome
@media screen and (-webkit-min-device-pixel-ratio:0)
{
		outline: 0;
		border: 0;
		border-radius: 500px;
		width: 400px;
		max-width: 100%;
		margin: 24px 0 16px;
		transition: box-shadow 0.2s ease-in-out;
		// Chrome
		@media screen and (-webkit-min-device-pixel-ratio:0) {
			& {
				overflow: hidden;
				height: 30px;
				-webkit-appearance: none;
				background-color: #ddd;
			}
			&::-webkit-slider-runnable-track {
				height: 30px;
				-webkit-appearance: none;
				color: #444;
				// margin-top: -1px;
				transition: box-shadow 0.2s ease-in-out;
			}
			&::-webkit-slider-thumb {
				width: 30px;
				-webkit-appearance: none;
				height: 30px;
				cursor: ew-resize;
				background: #fff;
				box-shadow: -340px 0 0 320px #1597ff, inset 0 0 0 30px #1597ff;
				border-radius: 50%;
				transition: box-shadow 0.2s ease-in-out;
				position: relative;
				// top: 1px;
			}
			&:active::-webkit-slider-thumb {
				background: #fff;
				box-shadow: -340px 0 0 320px #1597ff, inset 0 0 0 3px #1597ff;
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
`
function InputRange() {
    return (
        <>
            <Input type="range" ></Input>
        </>
    )
}

export default InputRange