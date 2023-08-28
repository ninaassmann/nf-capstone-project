import Link from "next/link";
import { css, styled } from "styled-components";

const StyledLink = styled(Link)`
  position: relative;
  display: block;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: lightgray;
  color: black;
  text-decoration: none;

  &:hover {
    filter: brightness(0.85);
  }

  ${({ $variant }) =>
    $variant == "breed" &&
    css`
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.5rem;
    `};
`;

export default StyledLink;
