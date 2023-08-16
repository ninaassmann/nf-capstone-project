import { calculateAge } from "@/utils/calculateAge";
import Link from "next/link";
import { styled } from "styled-components";
import Label from "./Label";

export default function ListItem({ mixed, name, breed, birthday, slug }) {
  const age = calculateAge(birthday);

  const petBreeds = breed.join(", ");

  return (
    <li>
      <StyledLink href={`/pets/${slug}`}>
        {mixed && <Label>Mixed</Label>}
        <h3>{name}</h3>
        <p>{petBreeds}</p>
        <p>{age}</p>
      </StyledLink>
    </li>
  );
}

const StyledLink = styled(Link)`
  position: relative;
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
