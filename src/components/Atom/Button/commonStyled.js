import styled from 'styled-components';

export const WrapButton = styled.button`
  display: inline-flex;
  position: relative;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  outline: 0px;
  border: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  width: auto;
  min-width: 64px;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 0.2s linear,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
  }

  ${({ variant, bg }) =>
    variant === 'outline' &&
    `color: var(--${bg}); background-color:var(--white); border:1px solid var(--${bg}); box-shadow:none;`}
  ${({ variant, bg }) => variant === 'contained' && `color: var(--white); background-color:var(--${bg});`}
  ${({ variant, bg }) =>
    variant === 'text' &&
    `box-shadow:none; border:0px;color: var(--${bg}); &:hover{box-shadow:none};  background-color:inherit;`}
&.loading {
    box-shadow: none;
    background-color: rgba(100, 100, 100, 0.6);
    color: rgba(100, 100, 100, 0.6);
    pointer-events: none;
    ${({ variant }) => variant === 'outline' && 'border: 1px solid rgba(130, 130, 130, 0.8);'}
  }
  & + & {
    margin-left: ${(props) => props.buttonAndButton};
  }
`;
