import { styled } from "styled-components";

export default styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${({ theme }) => theme.background};
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  font-size: var(--font-small);
`;
