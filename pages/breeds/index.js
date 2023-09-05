import Container from "@/components/Container.styled";
import { styled } from "styled-components";

import {
  dogBreedGroups,
  dogBreedHeight,
  dogBreedTemperament,
} from "@/data/dogBreedFilter";
import Wrapper from "@/components/FormComponents/Wrapper.styled";
import StyledForm from "@/components/FormComponents/Form.styled";
import StyledList from "@/components/List.styled";
import Select from "@/components/FormComponents/Select.styled";
import { dogBreedFilter } from "@/utils/dogBreedFilter";
import ListItemWithImg from "@/components/ListItemWithImg";
import Button from "@/components/Button";
import useLocalStorageState from "use-local-storage-state";
import { handleNext, handlePrevious } from "@/utils/handleBreedPages";
import ButtonWrapper from "@/components/ButtonWrapper.styled";

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

  function handleOnChange(event, key) {
    const newFilter = {
      ...filter,
    };
    newFilter[key] = event.target.value;
    setFilter(newFilter);
    setSliceOptions(initialSliceOptions);
  }

  return (
    <Container>
      <StyledForm $isRow>
        <Wrapper>
          <label htmlFor="breedGroup">Breed Group</label>
          <Select
            $isRow
            name="breedGroup"
            id="breedGroup"
            onChange={(event) => handleOnChange(event, "group")}
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
            $isRow
            name="breedTemperament"
            id="breedTemperament"
            onChange={(event) => handleOnChange(event, "temperament")}
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
            $isRow
            name="breedSize"
            id="breedSize"
            onChange={(event) => handleOnChange(event, "size")}
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
      </StyledForm>

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
            $variant="primary"
          />
          <Button
            type="button"
            onClick={() =>
              handleNext(sliceOptions, setSliceOptions, breedsToShowCount)
            }
            buttonText="Next"
            disabled={sliceOptions.nextDisabled}
            $variant="primary"
          />
        </ButtonWrapper>
      )}
    </Container>
  );
}
