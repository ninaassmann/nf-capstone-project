import { styled } from "styled-components";
import ListItem from "./ListItem";

export default function List({ pets }) {
  return (
    <StyledList>
      {pets &&
        pets.map((pet) => (
          <ListItem
            key={pet.id}
            name={pet.petName}
            breed={pet.petBreed}
            birthday={pet.petBirthday}
          >
            {pet.petName} {pet.petBreed}
          </ListItem>
        ))}
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
