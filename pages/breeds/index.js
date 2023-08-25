import Container from "@/components/Container.styled";
import Thumbnail from "@/components/Breeds/Thumbnail";
import Link from "next/link";
import { styled } from "styled-components";
import { dogBreedGroups } from "@/data/dogBreedGroups";
import { useEffect, useState } from "react";

export default function BreedList({ dogData }) {
  const [filter, setFilter] = useState("all");
  const [showBreeds, setShowBreeds] = useState(dogData);

  useEffect(() => {
    if (filter !== "all") {
      const filteredBreeds =
        dogData && dogData.filter((breed) => breed.breed_group === filter);
      setShowBreeds(filteredBreeds && filteredBreeds);
    } else {
      setShowBreeds(dogData);
    }
  }, [filter, dogData]);

  return (
    <Container>
      <form>
        <label htmlFor="breedGroup">Breed Group</label>
        <select
          name="breedGroup"
          id="breedGroup"
          onChange={(event) => setFilter(event.target.value)}
          defaultValue="all"
        >
          <option key="all" value="all">
            All
          </option>
          {dogBreedGroups.map((group) => (
            <option key={group} value={group}>
              {group}
            </option>
          ))}
        </select>
      </form>
      <List>
        {showBreeds &&
          showBreeds.map((breed) => (
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
