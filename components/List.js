import { styled } from "styled-components";
import ListItem from "./ListItem";

export default function List({ pets, calculateAge }) {
  return (
    <StyledList>
      {pets &&
        pets.map((pet) => (
          <ListItem
            key={pet.id}
            slug={pet.slug}
            name={pet.petName}
            breed={pet.petBreed}
            birthday={pet.petBirthday}
            calculateAge={calculateAge}
          >
            {pet.petName} {pet.petBreed}
          </ListItem>
        ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
`;
