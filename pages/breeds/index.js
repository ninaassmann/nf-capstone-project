import Container from "@/components/Container.styled";
import Thumbnail from "@/components/Breeds/Thumbnail";
import { styled } from "styled-components";

import {
  dogBreedGroups,
  dogBreedHeight,
  dogBreedTemperament,
} from "@/data/dogBreedFilter";
import Wrapper from "@/components/Form/Wrapper.styled";
import StyledForm from "@/components/Form/Form.styled";
import StyledList from "@/components/List.styled";
import StyledLink from "@/components/ListLink.styled";
import Select from "@/components/Form/Select.styled";
import { dogBreedFilter } from "@/utils/dogBreedFilter";
import { useState } from "react";

const initialFilter = {
  group: "all",
  temperament: "all",
  size: "all",
};

export default function BreedList({ dogBreeds }) {
  const [filter, setFilter] = useState(initialFilter);

  const breedsToShow = dogBreedFilter(filter, dogBreeds);

  return (
    <Container>
      <FilterForm $isRow>
        <Wrapper>
          <label htmlFor="breedGroup">Breed Group</label>
          <Select
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
          </Select>
        </Wrapper>
        <Wrapper>
          <label htmlFor="breedTemperament">Temperament</label>
          <Select
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
          </Select>
        </Wrapper>
        <Wrapper>
          <label htmlFor="breedSize">Size</label>
          <Select
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
          </Select>
        </Wrapper>
      </FilterForm>
      <StyledList>
        {breedsToShow && breedsToShow.length > 0 ? (
          breedsToShow.map((breed) => (
            <li key={breed.id}>
              <StyledLink href={`/breeds/${breed.slug}`} $variant="breed">
                <Thumbnail breed={breed} />
                <h3>{breed.name}</h3>
              </StyledLink>
            </li>
          ))
        ) : (
          <p>There is no matching breed. Please try another combination</p>
        )}
      </StyledList>
    </Container>
  );
}

const FilterForm = styled(StyledForm)`
  justify-content: space-between;
  & div {
    width: 100%;
  }
`;
