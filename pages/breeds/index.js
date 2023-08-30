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
import { useEffect, useState } from "react";
import ListItemWithImg from "@/components/ListItemWithImg";
import Button from "@/components/Button";

const initialFilter = {
  group: "all",
  temperament: "all",
  size: "all",
};

export default function BreedList({ dogBreeds }) {
  const [filter, setFilter] = useState(initialFilter);
  const [sliceOptions, setSliceOptions] = useState({
    start: 0,
    end: 10,
    prevDisabled: true,
    nextDisabled: false,
  });

  const breedsToShow = dogBreedFilter(filter, dogBreeds);
  const breedsToShowCount = breedsToShow?.length;

  let newSliceOptions = {};

  function checkRange(newSliceOptions) {
    if (newSliceOptions.start === 0) {
      newSliceOptions = {
        start: 0,
        end: 10,
        prevDisabled: true,
        nextDisabled: false,
      };
      setSliceOptions(newSliceOptions);
    }

    if (newSliceOptions.end > breedsToShowCount) {
      newSliceOptions = {
        start: newSliceOptions.start,
        end: newSliceOptions.end,
        prevDisabled: false,
        nextDisabled: true,
      };
      setSliceOptions(newSliceOptions);
    }
    setSliceOptions(newSliceOptions);
  }

  function handlePrevious() {
    newSliceOptions = {
      start: sliceOptions.start - 10,
      end: sliceOptions.end - 10,
      prevDisabled: false,
      nextDisabled: false,
    };
    checkRange(newSliceOptions);
  }

  function handleNext() {
    newSliceOptions = {
      start: sliceOptions.start + 10,
      end: sliceOptions.end + 10,
      prevDisabled: false,
      nextDisabled: false,
    };
    checkRange(newSliceOptions);
  }

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
      <ButtonWrapper>
        <Button
          type="button"
          onClick={handlePrevious}
          buttonText="Previous"
          disabled={sliceOptions.prevDisabled}
        />
        <Button
          type="button"
          onClick={handleNext}
          buttonText="Next"
          disabled={sliceOptions.nextDisabled}
        />
      </ButtonWrapper>
      <StyledList>
        {breedsToShow && breedsToShow.length > 0 ? (
          breedsToShow
            .slice(sliceOptions.start, sliceOptions.end)
            .map((breed) => <ListItemWithImg breed={breed} key={breed.id} />)
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

const ButtonWrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;
