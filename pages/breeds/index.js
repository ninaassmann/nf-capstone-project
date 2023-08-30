import Container from "@/components/Container.styled";
import { styled } from "styled-components";

import {
  dogBreedGroups,
  dogBreedHeight,
  dogBreedTemperament,
} from "@/data/dogBreedFilter";
import Wrapper from "@/components/Form/Wrapper.styled";
import StyledForm from "@/components/Form/Form.styled";
import StyledList from "@/components/List.styled";
import Select from "@/components/Form/Select.styled";
import { dogBreedFilter } from "@/utils/dogBreedFilter";
import { useEffect, useState } from "react";
import ListItemWithImg from "@/components/ListItemWithImg";
import Button from "@/components/Button";
import useLocalStorageState from "use-local-storage-state";
import { handleNext, handlePrevious } from "@/utils/handleBreedPages";

const initialFilter = {
  group: "all",
  temperament: "all",
  size: "all",
};

const initialSliceOptions = {
  start: 0,
  end: 10,
  prevDisabled: true,
  nextDisabled: false,
};

export default function BreedList({ dogBreeds }) {
  const [filter, setFilter] = useLocalStorageState("breedFilter", {
    defaultValue: initialFilter,
  });
  const [sliceOptions, setSliceOptions] = useLocalStorageState("sliceOptions", {
    defaultValue: initialSliceOptions,
  });

  const breedsToShow = dogBreedFilter(filter, dogBreeds && dogBreeds);
  const breedsToShowCount = breedsToShow?.length;

  useEffect(() => {
    setSliceOptions(initialSliceOptions);
  }, [setSliceOptions, filter]);

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
            defaultValue={filter.group}
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
            defaultValue={filter.temperament}
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
            defaultValue={filter.size}
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
          breedsToShow
            .slice(sliceOptions.start, sliceOptions.end)
            .map((breed) => <ListItemWithImg breed={breed} key={breed.id} />)
        ) : (
          <p>There is no matching breed. Please try another combination</p>
        )}
      </StyledList>
      {breedsToShowCount > 10 && (
        <ButtonWrapper>
          <Button
            type="button"
            onClick={() =>
              handlePrevious(sliceOptions, setSliceOptions, breedsToShowCount)
            }
            buttonText="Previous"
            disabled={sliceOptions.prevDisabled}
          />
          <Button
            type="button"
            onClick={() =>
              handleNext(sliceOptions, setSliceOptions, breedsToShowCount)
            }
            buttonText="Next"
            disabled={sliceOptions.nextDisabled}
          />
        </ButtonWrapper>
      )}
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;
