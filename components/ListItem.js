import Link from "next/link";
import { styled } from "styled-components";

export default function ListItem({
  id,
  name,
  breed,
  birthday,
  slug,
  calculateAge,
}) {
  const age = calculateAge(birthday);

  return (
    <li>
      <StyledLink href={`/pets/${slug}`}>
        <h3>{name}</h3>
        <p>{breed}</p>
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
