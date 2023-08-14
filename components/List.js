import { styled } from "styled-components";

export default function List() {
  return (
    <StyledList>
      <li>test 01</li>
      <li>test 02</li>
    </StyledList>
  );
}

const StyledList = styled.ul`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
`;
