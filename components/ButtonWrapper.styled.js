const { styled } = require("styled-components");

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.$isColumn ? "column" : "row")};
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export default ButtonWrapper;
