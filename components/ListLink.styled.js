import Link from "next/link";
import { css, styled } from "styled-components";

const StyledLink = styled(Link)`
  position: relative;
  display: block;
  padding: 1rem;
  border-radius: var(--border-radius);
  background: ${({ theme }) => theme.lightBackground};

  &:hover {
    box-shadow: 0 0 0.25rem 0 rgba(0, 0, 0, 0.125);
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
