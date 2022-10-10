import React from 'react';
import styled from "styled-components";
const FormFeild = styled.div`
    
`
const Label = styled.label`
top: 50%;
left: 28px;
transform: translateY(-50%);
user-select: none;
pointer-events: none;
transition: all 0.3s;

`
const Input = styled.input`
height: 40px;
width: 100%;
padding:0 18px;
transition: all 0.3s;
border:1px solid #eee;
border-radius: 4px;
color:var(--text-color);
&:focus{
    border-color:var(--primary);
    outline: none;
}
&:focus+ .inputText_label_name,
&:not(:placeholder-shown)+ .inputText_label_name
{
top:0;
left: 22px;
padding:0 6px;
display: inline-block;
background-color: transparent;
color:var(--primary);
background-color: #fff;
}
`
function InputText({ name,...props}) {
    return (
        <FormFeild className='position-relative'>
            <Input type="text" placeholder=' ' className='inputText_input' {...props}/>
            <Label className='position-absolute inputText_label_name'>{name}</Label>
        </FormFeild>
    )
}

export default InputText