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
  border-radius: var(--border-radius);
  border: none;
  background-color: lightgray;
  &:hover {
    filter: brightness(0.95);
  }

  ${({ $variant }) =>
    $variant == "submit" &&
    css`
      background: var(--success);
      color: var(--white);
    `};
  ${({ $variant }) =>
    $variant == "primary" &&
    css`
      background: var(--sky);
      color: var(--white);
    `};
  ${({ $variant }) =>
    $variant == "secondary" &&
    css`
      background: var(--blue-grey);
    `};
  ${({ $variant }) =>
    $variant == "danger" &&
    css`
      background: var(--danger);
      color: var(--white);
    `}
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
      background: var(--blue-grey);
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
