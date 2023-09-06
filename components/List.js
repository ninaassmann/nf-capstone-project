import ListItem from "./ListItem";
import StyledList from "./List.styled";

export default function List({ pets }) {
  return (
    <StyledList>
      {pets &&
        pets.map((pet) => (
          <ListItem
            key={pet._id}
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
