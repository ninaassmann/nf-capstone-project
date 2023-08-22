import { css, styled } from "styled-components";

const buttonVariants = {
  primary: css`
    background-color: lightblue;
  `,
  secondary: css`
    background-color: white;
  `,
  danger: css`
    background-color: rgb(200, 100, 100);
    color: white;
  `,
};

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

  ${({ $variant }) => buttonVariants[$variant] || ""};
`;
