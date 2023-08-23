const { styled } = require("styled-components");

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.$isRow ? "row" : "column")};
  gap: 0.5rem;
  position: relative;
`;

export default Wrapper;
