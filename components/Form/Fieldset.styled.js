const { styled, css } = require("styled-components");

const Fieldset = styled.fieldset`
  width: 100%;
  position: relative;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;

  & legend {
    font-weight: 700;
  }

  ${({ $isHighlight }) =>
    $isHighlight &&
    css`
      background-color: #f1f1f1;
      padding: 3rem 1rem 1rem;
      border-radius: 1rem;

      & > legend {
        position: absolute;
        top: 1rem;
      }
    `}
`;

export default Fieldset;
