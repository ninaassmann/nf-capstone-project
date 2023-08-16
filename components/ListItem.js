import { calculateAge } from "@/utils/calculateAge";
import Link from "next/link";
import { styled } from "styled-components";

export default function ListItem({ id, name, breed, birthday, slug }) {
  const age = calculateAge(birthday);

  const petBreeds = breed.join(", ");

  return (
    <li>
      <StyledLink href={`/pets/${slug}`}>
        <h3>{name}</h3>
        <p>{petBreeds}</p>
        <p>{age}</p>
      </StyledLink>
    </li>
  );
}

const StyledLink = styled(Link)`
  display: block;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: lightgray;
  color: black;
  text-decoration: none;

  &:hover {
    filter: brightness(0.85);
  }
`;
