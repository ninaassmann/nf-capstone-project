const { styled } = require("styled-components");

const Select = styled.select`
  width: 100%;
  padding: 1rem;
  border-radius: var(--border-radius);
  background-color: var(--white);
  border: none;
  position: relative;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background: url("/arrow.svg");
  background-size: 2rem;
  background-repeat: no-repeat;
  background-position: calc(100% - 0.5rem);
  background-color: var(--white);
`;

export default Select;
