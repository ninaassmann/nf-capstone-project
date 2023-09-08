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
  background: ${({ theme }) => theme.secondary};
  color: #eff1f5;
  &:hover {
    filter: brightness(0.95);
  }

  ${({ $variant }) =>
    $variant == "submit" &&
    css`
      background: ${({ theme }) => theme.success};
    `};
  ${({ $variant }) =>
    $variant == "primary" &&
    css`
      background: ${({ theme }) => theme.primary};
    `};
  ${({ $variant }) =>
    $variant == "secondary" &&
    css`
      background: ${({ theme }) => theme.secondary};
      color: ${({ theme }) => theme.text};
    `};
  ${({ $variant }) =>
    $variant == "danger" &&
    css`
      background: ${({ theme }) => theme.danger};
    `}
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
      background: ${({ theme }) => theme.secondary};
      opacity: 0.5;
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
