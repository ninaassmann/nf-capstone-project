import { calculateAge } from "@/utils/calculateAge";
import Label from "./Label.styled";
import StyledLink from "./ListLink.styled";

export default function ListItem({ mixed, name, breed, birthday, slug }) {
  const age = calculateAge(birthday);

  const petBreeds = breed?.join(", ");

  return (
    <li>
      <StyledLink href={`/pets/${slug}`}>
        {mixed && <Label>mixed</Label>}
        <h3>{name}</h3>
        <p>{petBreeds}</p>
        <p>{age}</p>
      </StyledLink>
    </li>
  );
}
