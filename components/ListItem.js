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
    <StyledListItem>
      <Link href={`/pets/${slug}`}>
        <h3>{name}</h3>
        <p>{breed}</p>
        <p>{age}</p>
      </Link>
    </StyledListItem>
  );
}

const StyledListItem = styled.li`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: lightgray;
`;
