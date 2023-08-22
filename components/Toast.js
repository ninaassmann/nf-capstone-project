import { keyframes, styled } from "styled-components";

export default function Toast({ text }) {
  return (
    <ToastContainer>
      <h4>{text}</h4>
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
  bottom: 1rem;
  background: hsl(127, 84%, 45%);
  width: min(90vw, 600px);
  margin-inline: auto;
  padding: 1.5rem;
  transform: translateY(200%);
  animation: ${toastAnimation} 3s ease;
`;
