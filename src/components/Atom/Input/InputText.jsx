import React from 'react';
import styled from 'styled-components';

export default function InputText({ name, Icon, placeholder = ' ', ...props }) {
  return (
    <FormFeild className='position-relative'>
      <Input type='text' className='inputText_input' placeholder={placeholder} {...props} />
      {Icon && <Icon className='position-absolute l-12 position-y-center' />}
      {name && <Label className='position-absolute inputText_label_name'>{name}</Label>}
    </FormFeild>
  );
}
const FormFeild = styled.div``;
const Label = styled.label`
  top: 50%;
  left: 28px;
  transform: translateY(-50%);
  user-select: none;
  pointer-events: none;
  transition: all 0.2s;
`;
const Input = styled.input`
  height: 40px;
  width: 100%;
  padding: 0 18px;
  transition: all 0.25s;
  border: 1px solid #eee;
  border-radius: 4px;
  color: var(--text-color);
  &:-internal-autofill-selected {
    background-color: var(--white);
  }
  &:focus {
    border-color: var(--primary);
    outline: none;
  }
  &:focus + .inputText_label_name,
  &:not(:placeholder-shown) + .inputText_label_name,
  &:-internal-autofill-selected {
    top: 0;
    left: 22px;
    padding: 0 6px;
    display: inline-block;
    background-color: transparent;
    color: var(--primary);
    background-color: var(--white);
  }
`;
