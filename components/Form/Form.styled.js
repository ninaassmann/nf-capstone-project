const { styled } = require("styled-components");

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.$isRow ? "row" : "column")};
  gap: 1rem;
`;

export default StyledForm;
