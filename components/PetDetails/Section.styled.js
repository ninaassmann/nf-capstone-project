const { styled, css } = require("styled-components");

const Section = styled.section`
  position: relative;
  width: 100%;
  display: block;
  padding: 1rem;
  border-radius: var(--border-radius);
  background: ${({ theme }) => theme.lightBackground};

  ${({ $isRow }) =>
    $isRow &&
    css`
      display: flex;
      flex-direction: row;
      gap: 1rem;
      background-color: transparent;
      padding: 0;
      dl {
        width: 100%;
        display: block;
        padding: 1rem;
        border-radius: var(--border-radius);
        background: ${({ theme }) => theme.lightBackground};
        text-align: center;
      }
    `}
`;

export default Section;
