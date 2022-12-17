import { useState } from 'react';
import styled from 'styled-components';
import { EyeOff, EyeIcon } from '~/assets/svg';
import PropTypes from 'prop-types';
export default function InputPassword({ name, ...props }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormFeild className="position-relative">
      <Input type={showPassword ? 'text' : 'password'} placeholder=" " className="inputText_input" {...props} />
      <Label className="position-absolute inputText_label_name">{name}</Label>
      <Eye onClick={() => setShowPassword((prev) => !prev)}>
        {showPassword ? <EyeIcon stroke="#999" /> : <EyeOff stroke="#999" />}
      </Eye>
    </FormFeild>
  );
}
Image.propTypes = {
    name: PropTypes.string.isRequired,
  };
const FormFeild = styled.div``;
const Label = styled.label`
  top: 50%;
  left: 26px;
  transform: translateY(-50%);
  user-select: none;
  pointer-events: none;
  transition: all 0.3s;
`;
const Input = styled.input`
  height: 40px;
  width: 100%;
  padding: 0 18px;
  transition: all 0.3s;
  border: 1px solid var(--border-color-light);
  border-radius: 4px;
  color: var(--text-color);
  &:focus {
    border-color: var(--primary);
    outline: none;
  }
  &:focus + .inputText_label_name,
  &:not(:placeholder-shown) + .inputText_label_name {
    top: 0;
    left: 22px;
    padding: 0 4px;
    display: inline-block;
    background-color: transparent;
    color: var(--primary);
    background-color: #fff;
  }
`;
const Eye = styled.div`
  position: absolute;
  right: 24px;
  top: 50%;
  display: flex;
  justify-content: center;
  transform: translateY(-50%);
  cursor: pointer;
  user-select: none;
`;
