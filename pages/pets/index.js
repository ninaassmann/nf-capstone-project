import Button from "@/components/Button";
import Container from "@/components/Container";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { styled } from "styled-components";
import { uid } from "uid";

var slugify = require("slugify");

const initialBreedSelectArr = [
  {
    id: 1,
    name: "petBreed-1",
  },
];

export default function Form({ addNewPet, dogData }) {
  const [breedSelectArr, setBreedSelect] = useState(initialBreedSelectArr);
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);

    const petBreedArr = breedSelectArr.map(
      (breedSelect) => data[breedSelect.name]
    );

    const newPet = {
      id: uid(),
      slug: slugify(data.petName, { lower: true }),
      petName: data.petName,
      mixed: data.mixedBreed.checked,
      petBreed: petBreedArr,
      petBirthday: data.petBirthday,
    };

    addNewPet(newPet);
    setBreedSelect(initialBreedSelectArr);

    event.target.reset();
    router.push("/");
  }

  function handleAddBreed() {
    let index = 2;
    const newBreedSelect = {
      id: breedSelectArr.length + 1,
      name: `petBreed-${index}`,
    };
    index++;
    setBreedSelect([...breedSelectArr, newBreedSelect]);
  }

  return (
    <Container>
      <h1>Create a new Dog</h1>
      <StyledForm onSubmit={handleSubmit}>
        <InputWrapper>
          <label htmlFor="petName">Name</label>
          <input
            type="text"
            id="petName"
            name="petName"
            placeholder="Enter the name of your pet"
            maxLength="20"
            pattern="[a-zA-Z]*"
            required
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="petBirthday">Birthday</label>
          <input type="date" id="petBirthday" name="petBirthday" required />
        </InputWrapper>
        <fieldset>
          <legend>Breed</legend>
          <CheckboxWrapper>
            <input type="checkbox" id="mixedBreed" name="mixedBreed" />
            <label htmlFor="mixedBreed">Mixed</label>
          </CheckboxWrapper>

          {breedSelectArr.map((breedSelect) => (
            <SelectWrapper key={breedSelect.id}>
              <select name={breedSelect.name}>
                {dogData &&
                  dogData.map((breed) => (
                    <option key={breed.id} value={breed.name}>
                      {breed.name}
                    </option>
                  ))}
              </select>
            </SelectWrapper>
          ))}
          <Button
            type="button"
            onClick={handleAddBreed}
            buttonText="Add another Breed"
          />
        </fieldset>
        <Button type="submit" buttonText="Create a new Dog" $isPrimary />
      </StyledForm>
      <Link href="/">back to overview</Link>
    </Container>
  );
}

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  & fieldset {
    border: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 1rem;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & input {
    width: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid grey;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;

  & select {
    width: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid grey;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

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

  & input[type="checkbox"] {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 1rem;
  }
`;
