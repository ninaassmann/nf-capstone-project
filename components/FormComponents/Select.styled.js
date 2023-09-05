const { styled, css } = require("styled-components");

const Select = styled.select`
  width: 100%;
  padding: 1rem;
  border-radius: var(--border-radius);
  border: none;
  position: relative;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background: ${({ theme }) => theme.lightBackground} url("/arrow.svg");
  background-size: 2rem;
  background-repeat: no-repeat;
  background-position: calc(100% - 0.5rem);

  ${({ $isRow }) =>
    $isRow &&
    css`
      background: ${({ theme }) => theme.midBackground} url("/arrow.svg");
      background-size: 2rem;
      background-repeat: no-repeat;
      background-position: calc(100% - 0.5rem);
    `}
`;

export default Select;
