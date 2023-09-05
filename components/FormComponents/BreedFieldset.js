import { useState } from "react";
import Button from "../Button";
import Fieldset from "./Fieldset.styled";
import Select from "./Select.styled";
import Wrapper from "./Wrapper.styled";
import { styled } from "styled-components";
import { ErrorWrapper, Errortext } from "./Error.styled";

export default function BreedFieldset({
  dogBreeds,
  setPetBreeds,
  petBreeds,
  errorMessages,
  setErrorMessages,
}) {
  const [selectedBreed, setSelectedBreed] = useState("");

  function handleChange(event) {
    const newBreed = event.target.value;
    setSelectedBreed(newBreed);
  }

  function handleAddBreed() {
    if (selectedBreed) {
      setErrorMessages({ ...errorMessages, hidden: true });
      setPetBreeds([...petBreeds, selectedBreed]);
      setSelectedBreed("");
    }
  }

  return (
    <>
      <Wrapper>
        <h4>Your selected breeds</h4>
        <StyledList>
          {petBreeds && petBreeds.map((breed) => <li key={breed}>{breed}</li>)}
        </StyledList>
      </Wrapper>
      <Fieldset>
        <legend>Breed</legend>

        <Wrapper>
          <Select
            name="breedSelect"
            value={selectedBreed}
            onChange={handleChange}
          >
            <option key="none" value="">
              {"Select an Option"}
            </option>
            <option key="unknown" value="Breed Unknown">
              {"I don't know the breed"}
            </option>
            {dogBreeds &&
              dogBreeds.map((breed) => (
                <option
                  key={breed.id}
                  value={breed.name}
                  disabled={petBreeds?.includes(breed.name)}
                >
                  {breed.name}
                </option>
              ))}
          </Select>
          <Button
            type="button"
            buttonText="Add breed"
            onClick={handleAddBreed}
            $variant="secondary"
          />
          <ErrorWrapper>
            {
              <Errortext>
                {!errorMessages.hidden && errorMessages.breed}
              </Errortext>
            }
          </ErrorWrapper>
        </Wrapper>
      </Fieldset>
    </>
  );
}

const StyledList = styled.ul`
  width: 100%;
  margin-bottom: 2rem;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  & li {
    background: ${({ theme }) => theme.lightBackground};
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
  }
`;
