import { css, styled } from "styled-components";

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${({ $isStepForm }) =>
    $isStepForm &&
    css`
      min-height: calc(100vh - 4rem);
      margin: 2rem 0;
      & h1 {
        font-size: 1.5rem;
        max-width: 80%;
      }
    `}
  ${({ $isRow }) =>
    $isRow &&
    css`
      flex-direction: row;
    `}
`;

export default StyledForm;
