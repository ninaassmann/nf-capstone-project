import { styled } from "styled-components";

export default function List({ pets }) {
  return (
    <StyledList>
      {pets && pets.map((pet) => <li key={pet.id}>{pet.petName}</li>)}
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
