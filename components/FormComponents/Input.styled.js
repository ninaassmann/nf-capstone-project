const { styled, css } = require("styled-components");

const Input = styled.input`
  width: 100%;
  min-height: 3.5rem;
  padding: 1rem;
  border-radius: var(--border-radius);
  background: var(--white);
  border: none;

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
