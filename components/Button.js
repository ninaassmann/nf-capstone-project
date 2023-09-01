import { css, styled } from "styled-components";

export default function Button({
  type,
  onClick,
  buttonText,
  $variant,
  disabled,
  $isStepButton,
}) {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      $variant={$variant}
      disabled={disabled}
      $isStepButton={$isStepButton}
    >
      {buttonText}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: lightgray;
  &:hover {
    filter: brightness(0.95);
  }

  ${({ $variant }) =>
    $variant == "submit" &&
    css`
      background-color: lightgreen;
    `};
  ${({ $variant }) =>
    $variant == "primary" &&
    css`
      background-color: lightblue;
    `};
  ${({ $variant }) =>
    $variant == "secondary" &&
    css`
      background-color: lightgrey;
    `};
  ${({ $variant }) =>
    $variant == "danger" &&
    css`
      background-color: rgb(200, 100, 100);
      color: white;
    `}
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
      background-color: #f1f1f1;
      &:hover {
        filter: unset;
      }
    `}
    ${({ $isStepButton }) =>
    $isStepButton &&
    css`
      margin-top: 0;
    `}
`;
