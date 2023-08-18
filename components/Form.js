import { css, styled } from "styled-components";
import Button from "./Button";
import { useRouter } from "next/router";
import { useState } from "react";
import { uid } from "uid";
import { handleExistingPetName } from "@/utils/handleExistingPetName";

const initialBreedSelectArray = ["petBreed-1"];

const slugify = require("slugify");

export default function Form({ addNewPet, updatePets, dogData, pets, pet }) {
  const [petBreeds, setPetBreeds] = useState(pet && pet.petBreed);

  const [breedSelectArray, setBreedSelect] = useState(initialBreedSelectArray);

  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const petBreedArray = breedSelectArray.map(
      (breedSelect) => data[breedSelect.name]
    );

    pet && setPetBreeds(...petBreeds, ...petBreedArray);
    setPetBreeds(petBreedArray);

    const dataPet = {
      id: pet && pet.id,
      slug: slugify(handleExistingPetName(data.petName, pets), { lower: true }),
      petName: data.petName,
      petBreed: petBreeds,
      petBirthday: data.petBirthday,
      vet: {
        name: data.vetName,
        address: data.vetAddress,
        phone: data.vetPhone,
      },
    };

    pet ? updatePets(dataPet) : addNewPet(dataPet);

    setBreedSelect(initialBreedSelectArray);

    event.target.reset();
    pet ? router.push(`/pets/${pet.slug}`) : router.push("/");
  }

  function handleAddBreed() {
    let index = 2;
    const newBreedSelect = `petBreed-${index}`;
    setBreedSelect([...breedSelectArray, newBreedSelect]);
    index++;
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputWrapper>
        <label htmlFor="petName">Name</label>
        <StyledInput
          type="text"
          id="petName"
          name="petName"
          placeholder="Enter the name of your pet"
          defaultValue={pet && pet.petName}
          maxLength="20"
          pattern="^[A-Za-z ]+$"
          required
        />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="petBirthday">Birthday</label>
        <StyledInput
          type="date"
          id="petBirthday"
          name="petBirthday"
          defaultValue={pet && pet.petBirthday}
          required
        />
      </InputWrapper>
      <StyledFieldset>
        <legend>Breed</legend>
        <p>
          Is your pet a purebred or a mixed breed? You can either select
          unknown, one breed or multiple breeds.
        </p>

        {pet
          ? breedSelectArray.map((breedSelect) =>
              pet.petBreed.map((breed, index) => (
                <SelectWrapper key={breedSelect}>
                  <StyledSelect name={breedSelect} defaultValue={breed}>
                    {dogData &&
                      dogData.map((breed) => (
                        <option key={breed.id} value={breed.name}>
                          {breed.name}
                        </option>
                      ))}
                  </StyledSelect>
                </SelectWrapper>
              ))
            )
          : breedSelectArray.map((breedSelect) => (
              <SelectWrapper key={breedSelect}>
                <StyledSelect name={breedSelect}>
                  <option key="unknown" value="breed unknown" selected>
                    {"I don't know the breed"}
                  </option>
                  {dogData &&
                    dogData.map((breed) => (
                      <option key={breed.id} value={breed.name}>
                        {breed.name}
                      </option>
                    ))}
                </StyledSelect>
              </SelectWrapper>
            ))}
        <Button
          type="button"
          onClick={handleAddBreed}
          buttonText="Add another Breed"
        />
      </StyledFieldset>
      <StyledFieldset isHighlight>
        <legend>Vet Information</legend>
        <label htmlFor="vetName">Name</label>
        <StyledInput
          type="text"
          id="vetName"
          name="vetName"
          placeholder="Enter the name of your vet"
          defaultValue={pet && pet.vet.name}
        />
        <label htmlFor="vetName">Addess</label>
        <StyledInput
          type="text"
          id="vetAddress"
          name="vetAddress"
          placeholder="Enter the address of your vet"
          defaultValue={pet && pet.vet.address}
        />
        <label htmlFor="vetName">Phone</label>
        <StyledInput
          type="tel"
          id="vetPhone"
          name="vetPhone"
          placeholder="Enter the phone number of your vet"
          defaultValue={pet && pet.vet.phone}
        />
      </StyledFieldset>
      <Button type="submit" buttonText="Create a new Dog" variant="primary" />
    </StyledForm>
  );
}

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const StyledFieldset = styled.fieldset`
  position: relative;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;

  & legend {
    font-weight: 700;
  }

  ${({ isHighlight }) =>
    isHighlight &&
    css`
      background-color: #f1f1f1;
      padding: 3rem 1rem 1rem;
      border-radius: 1rem;

      & legend {
        position: absolute;
        top: 1rem;
      }
    `}
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid grey;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid grey;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &::after {
    content: "↓";
    position: absolute;
    font-size: 1rem;
    right: 1rem;
    top: 0.95rem;
    color: black;
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledCheckbox = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
`;
