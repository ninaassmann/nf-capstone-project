import { useState } from "react";
import Button from "../Button";
import Fieldset from "./Fieldset.styled";
import Select from "./Select.styled";
import Wrapper from "./Wrapper.styled";

export default function BreedFieldset({
  pet,
  petBreeds,
  dogBreeds,
  setPetBreeds,
}) {
  const [selectedBreed, setSelectedBreed] = useState("");
  const [petBreedsTest, setpetBreedsTest] = useState([]);

  function handleAddBreed() {
    const index = petBreeds.length + 1;
    const newBreedSelect = { formSelectName: `petBreed-${index}` };
    setPetBreeds([...petBreeds, newBreedSelect]);
  }

  function handleChange(event) {
    const newBreed = event.target.value;
    console.log(newBreed);
    setSelectedBreed(newBreed);
  }

  function handleAddBreed() {
    setpetBreedsTest([...petBreedsTest, selectedBreed]);
    console.log(petBreedsTest && petBreedsTest);
  }

  return (
    <Fieldset>
      <legend>Breed</legend>

      <Wrapper>
        <Select
          name="breedSelect"
          defaultValue="Breed Unknown"
          onChange={handleChange}
        >
          <option key="unknown" value="Breed Unknown">
            {"I don't know the breed"}
          </option>
          {dogBreeds &&
            dogBreeds.map((breed) => (
              <option
                key={breed.id}
                value={breed.name}
                disabled={petBreeds.some(
                  (selectedBreed) => selectedBreed.breed === breed.name
                )}
              >
                {breed.name}
              </option>
            ))}
        </Select>
        <Button type="button" buttonText="Add breed" onClick={handleAddBreed} />
      </Wrapper>
      <ul>
        {petBreedsTest &&
          petBreedsTest.map((breed) => <li key={breed}>{breed}</li>)}
      </ul>
    </Fieldset>
  );
}
