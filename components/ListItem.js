import { calculateAge } from "@/utils/calculateAge";
import Link from "next/link";
import { styled } from "styled-components";

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

const Label = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  text-transform: uppercase;
`;
