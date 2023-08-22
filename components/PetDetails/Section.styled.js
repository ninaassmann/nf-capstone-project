const { styled, css } = require("styled-components");

const Section = styled.section`
  position: relative;
  width: 100%;
  display: block;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: lightgrey;

  & dt {
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  &:last-of-type {
    margin-bottom: 2rem;
  }

  ${({ $isRow }) =>
    $isRow &&
    css`
      display: flex;
      flex-direction: row;
      gap: 1rem;
      background-color: transparent;
      padding: 0;
      & dl {
        width: 100%;
        display: block;
        padding: 1rem;
        border-radius: 0.5rem;
        background-color: lightgrey;
        text-align: center;
      }
    `}
`;

export default Section;
