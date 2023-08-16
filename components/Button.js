import { css, styled } from "styled-components";

export default function Button({ type, onClick, buttonText, $isPrimary }) {
  return (
    <StyledButton type={type} onClick={onClick} $isPrimary={$isPrimary}>
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

  ${({ $isPrimary }) =>
    $isPrimary &&
    css`
      background-color: lightblue;
    `}
`;
