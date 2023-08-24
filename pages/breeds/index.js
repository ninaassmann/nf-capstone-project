import Container from "@/components/Container.styled";
import Thumbnail from "@/components/Breeds/Thumbnail";
import Link from "next/link";
import { styled } from "styled-components";

export default function BreedList({ dogData }) {
  return (
    <Container>
      <List>
        {dogData &&
          dogData.map((breed) => (
            <li key={breed.id}>
              <StyledLink href={`/breeds/${breed.slug}`}>
                <Thumbnail breed={breed} />
                <h3>{breed.name}</h3>
              </StyledLink>
            </li>
          ))}
      </List>
    </Container>
  );
}

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
`;

const StyledLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: lightgray;
  color: black;
  text-decoration: none;

  &:hover {
    filter: brightness(0.85);
  }
`;
