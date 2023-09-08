import { useSession } from "next-auth/react";

import ListItem from "./ListItem";
import StyledList from "./List.styled";

export default function List({ pets }) {
  const { data: session } = useSession();

  const userPets = pets?.filter((pet) => pet.author === session.user.email);

  return (
    <StyledList>
      {userPets &&
        userPets.map((pet) => (
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
