const { styled, css } = require("styled-components");

const Input = styled.input`
  width: 100%;
  min-height: 3.5rem;
  padding: 1rem;
  border-radius: var(--border-radius);

  background: ${({ theme }) => theme.lightBackground};
  border: none;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  ${({ disabled }) =>
    disabled &&
    css`
      border: none;
      background: ${({ theme }) => theme.darkBackground};
    `}
  ${({ $isHighlight }) =>
    $isHighlight &&
    css`
      background: ${({ theme }) => theme.background};
    `}
`;

export default Input;
