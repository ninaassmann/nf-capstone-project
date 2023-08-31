const { styled } = require("styled-components");

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.$isRow ? "row" : "column")};
  gap: 0.5rem;
  position: relative;
`;

export default Wrapper;
