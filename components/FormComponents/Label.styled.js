import { styled } from "styled-components";

const StyledLabel = styled.label`
  position: relative;
  width: 100%;
  text-align: center;
  background: ${({ theme }) => theme.lightBackground};
  padding: 1rem 1rem;
  border-radius: var(--border-radius);
`;

export default StyledLabel;
