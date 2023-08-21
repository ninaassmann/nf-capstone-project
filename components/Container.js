const { styled } = require("styled-components");

const Container = styled.div`
  width: min(90vw, 600px);
  margin-inline: auto;
  padding: 2rem 0;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 1rem;

  & section:first-of-type {
    margin-top: 1rem;
  }

  & h2 {
    margin-top: 1rem;
  }
`;

export default Container;
