import { css, styled } from "styled-components";

export default function Button({
  type,
  onClick,
  buttonText,
  $variant,
  disabled,
}) {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      $variant={$variant}
      disabled={disabled}
    >
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
  &:hover {
    filter: brightness(0.95);
  }

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
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
      background-color: #f1f1f1;
      &:hover {
        filter: unset;
      }
    `}
`;
