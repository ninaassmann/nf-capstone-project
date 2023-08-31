const { styled, css } = require("styled-components");

const Input = styled.input`
  width: 100%;
  min-height: 52px;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid grey;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  ${({ disabled }) =>
    disabled &&
    css`
      border: none;
      background-color: #f1f1f1;
    `}
`;

export default Input;
