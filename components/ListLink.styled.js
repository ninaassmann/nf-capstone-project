import Link from "next/link";
import { css, styled } from "styled-components";

const StyledLink = styled(Link)`
  position: relative;
  display: block;
  padding: 1rem;
  border-radius: var(--border-radius);
  background-color: var(--white);

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
      height: 96px;
    `};
`;

export default StyledLink;
