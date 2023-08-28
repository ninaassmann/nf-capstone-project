import { styled } from "styled-components";
import ListItem from "./ListItem";
import StyledList from "./List.styled";

export default function List({ pets }) {
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
            mixed={pet.mixed}
          >
            {pet.petName} {pet.petBreed}
          </ListItem>
        ))}
    </StyledList>
  );
}
