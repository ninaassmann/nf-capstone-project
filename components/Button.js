import { css, styled } from "styled-components";

export default function Button({ type, onClick, buttonText, $variant }) {
  return (
    <StyledButton type={type} onClick={onClick} $variant={$variant}>
      {buttonText}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 1rem;
  margin-top: 2rem;
  border-radius: 0.5rem;
  border: none;
  background-color: lightgray;

  ${({ $variant }) =>
    $variant == "primary" &&
    css`
      background-color: lightblue;
    `};
  ${({ $variant }) =>
    $variant == "secondary" &&
    css`
      background-color: white;
    `};
  ${({ $variant }) =>
    $variant == "danger" &&
    css`
      background-color: rgb(200, 100, 100);
      color: white;
    `}
`;
