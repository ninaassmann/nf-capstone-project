import Container from "@/components/Container.styled";
import Thumbnail from "@/components/Breeds/Thumbnail";
import Link from "next/link";
import { styled } from "styled-components";

import { useEffect, useState } from "react";
import {
  dogBreedGroups,
  dogBreedHeight,
  dogBreedTemperament,
} from "@/data/dogBreedFilter";
import { filterDogBreeds } from "@/utils/filterDogBreeds";

const initialFilter = {
  group: "all",
  temperament: "all",
  size: "all",
};

export default function BreedList({ dogData }) {
  const [filter, setFilter] = useState(initialFilter);
  const [showBreeds, setShowBreeds] = useState(dogData);

  useEffect(() => {
    filterDogBreeds(filter, dogData, setShowBreeds);
  }, [filter, dogData]);

  return (
    <Container>
      <form>
        <label htmlFor="breedGroup">Breed Group</label>
        <select
          name="breedGroup"
          id="breedGroup"
          onChange={(event) =>
            setFilter({ ...filter, group: event.target.value })
          }
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
        <label htmlFor="breedTemperament">Temperament</label>
        <select
          name="breedTemperament"
          id="breedTemperament"
          onChange={(event) =>
            setFilter({ ...filter, temperament: event.target.value })
          }
          defaultValue="all"
        >
          <option key="all" value="all">
            All
          </option>
          {dogBreedTemperament.map((temperament) => (
            <option key={temperament} value={temperament}>
              {temperament}
            </option>
          ))}
        </select>
        <label htmlFor="breedSize">Size</label>
        <select
          name="breedSize"
          id="breedSize"
          onChange={(event) =>
            setFilter({ ...filter, size: event.target.value })
          }
          defaultValue="all"
        >
          <option key="all" value="all">
            All
          </option>
          {dogBreedHeight.map((height) => (
            <option key={height} value={height}>
              {height}
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
