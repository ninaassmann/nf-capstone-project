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
      height: 24rem;
      border-radius: var(--border-radius);
    `}
`;

export default ImageWrapper;
