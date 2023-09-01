const { styled } = require("styled-components");

const Container = styled.div`
  padding: 5rem 0 7rem 0;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 1rem;

  & > section:first-of-type {
    margin-top: 1rem;
  }
`;

export default Container;
