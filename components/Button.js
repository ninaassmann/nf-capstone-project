import { styled } from "styled-components";

export default function Button({ type, onClick, buttonText }) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {buttonText}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: lightblue;
`;
