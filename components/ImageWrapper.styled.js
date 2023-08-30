import { css, styled } from "styled-components";

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  background: lightblue;

  ${({ $variant }) =>
    $variant == "thumbnail" &&
    css`
      width: 5rem;
      height: 5rem;
      border-radius: 0.25rem;
    `}
  ${({ $variant }) =>
    $variant == "hero" &&
    css`
      width: 100%;
      height: 18rem;
      border-radius: 0.25rem;
      & h1 {
        position: absolute;
        bottom: 0;
        left: 0;
        margin: 0;
        padding: 1rem;
        background-color: hsla(0, 0%, 100%, 0.75);
        color: black;
      }
    `}
`;

export default ImageWrapper;
