import { keyframes, styled } from "styled-components";

export default function Toast({ text }) {
  return (
    <ToastContainer>
      <p>{text}</p>
    </ToastContainer>
  );
}

const toastAnimation = keyframes`
 0% {transform: translateY(200%)}
 20% {transform: translate(0)}
 80% {transform: translate(0)}
 100% {transform: translateY(200%)}
`;

const ToastContainer = styled.div`
  position: fixed;
  bottom: 6rem;
  width: min(calc(100vw - 2rem), 600px);
  margin-inline: auto;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  background: ${({ theme }) => theme.success};
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.3);
  transform: translateY(200%);
  animation: ${toastAnimation} 3s ease;
`;
