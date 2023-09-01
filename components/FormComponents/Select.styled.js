const { styled } = require("styled-components");

const Select = styled.select`
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid grey;
  position: relative;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background: url("/arrow.svg");
  background-size: 2rem;
  background-repeat: no-repeat;
  background-position: calc(100% - 0.5rem);
`;

export default Select;
