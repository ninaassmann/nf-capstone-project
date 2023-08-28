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
  function handleAddBreed() {
    const index = petBreeds.length + 1;
    const newBreedSelect = { formSelectName: `petBreed-${index}` };
    setPetBreeds([...petBreeds, newBreedSelect]);
  }

  function handleBreedSelectChange(event) {
    const updatedPetBreeds =
      petBreeds &&
      petBreeds.map((breed) => {
        if (event.target.name !== breed.formSelectName) {
          return breed;
        } else {
          const updatedBreed = {
            ...breed,
            breed: event.target.value,
          };
          return updatedBreed;
        }
      });
    setPetBreeds(updatedPetBreeds);
  }

  return (
    <Fieldset>
      <legend>Breed</legend>
      <p>
        Is your pet a purebred or a mixed breed? You can either select unknown,
        one breed or multiple breeds.
      </p>

      {petBreeds.map((breed) => (
        <Wrapper key={breed.formSelectName}>
          <Select
            name={breed.formSelectName}
            defaultValue={pet ? breed.breed : "Breed Unknown"}
            onChange={(event) => handleBreedSelectChange(event)}
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
        </Wrapper>
      ))}

      <Button
        type="button"
        onClick={handleAddBreed}
        buttonText="Add another Breed"
      />
    </Fieldset>
  );
}
