import { useRouter } from "next/router";
import { useState } from "react";

import FoodFieldset from "./FoodFieldset";
import Button from "../Button";

import StyledForm from "./Form.styled";
import Wrapper from "./Wrapper.styled";
import Input from "./Input.styled";
import VetFieldset from "./VetFieldset";
import BreedFieldset from "./BreedFieldset";
import { createPet } from "@/utils/createPet";

var today = new Date().toISOString().split("T")[0];

export default function Form({
  addNewPet,
  updatePets,
  dogData,
  pets,
  pet,
  setToast,
}) {
  const router = useRouter();

  const newArrayPetBreeds = pet
    ? pet.petBreed.map((breed, index) => ({
        breed: breed,
        formSelectName: `petBreed-${index + 1}`,
      }))
    : [{ formSelectName: `petBreed-1` }];

  const [petBreeds, setPetBreeds] = useState(newArrayPetBreeds);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const dataPet = createPet(data, pet, pets, petBreeds);

    setToast(true);

    pet ? updatePets(dataPet) : addNewPet(dataPet);

    pet ? router.push(`/pets/${pet.slug}`) : router.push("/");
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Wrapper>
        <label htmlFor="petName">Name</label>
        <Input
          type="text"
          id="petName"
          name="petName"
          placeholder="Enter the name of your pet"
          defaultValue={pet && pet.petName}
          maxLength="20"
          pattern="^[A-Za-z ]+$"
          disabled={pet}
          required
        />
        {pet && <small>You can not update the Name</small>}
      </Wrapper>

      <Wrapper>
        <label htmlFor="petBirthday">Birthday</label>
        <Input
          type="date"
          id="petBirthday"
          name="petBirthday"
          min="2000-01-01"
          max={today}
          defaultValue={pet && pet.petBirthday}
          required
        />
      </Wrapper>

      <BreedFieldset
        pet={pet}
        petBreeds={petBreeds}
        dogData={dogData}
        setPetBreeds={setPetBreeds}
      />

      <VetFieldset pet={pet} />

      <FoodFieldset pet={pet} />

      <Button
        type="submit"
        buttonText={pet ? "Update Dog" : "Create a new Dog"}
        $variant="primary"
      />
    </StyledForm>
  );
}
