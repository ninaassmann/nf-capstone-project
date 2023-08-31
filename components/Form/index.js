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
import ButtonWrapper from "../ButtonWrapper.styled";
import Link from "next/link";
import { checkCustomRoutes } from "next/dist/lib/load-custom-routes";

var today = new Date().toISOString().split("T")[0];

export default function Form({
  addNewPet,
  updatePets,
  dogBreeds,
  pets,
  pet,
  setToast,
  formSteps,
  setFormSteps,
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
  let newFormSteps = {};

  function handleNext() {
    if (formSteps.currentPage < formSteps.end) {
      newFormSteps = {
        ...formSteps,
        currentPage: formSteps.currentPage + 1,
        prevDisabled: false,
      };
    }
    checkPage(newFormSteps);
  }

  function handlePrevious() {
    if (formSteps.currentPage > formSteps.start) {
      newFormSteps = {
        ...formSteps,
        currentPage: formSteps.currentPage - 1,
        nextDisabled: false,
      };
    }
    checkPage(newFormSteps);
  }

  function checkPage(newFormSteps) {
    if (newFormSteps?.currentPage === formSteps.end) {
      setFormSteps({ ...newFormSteps, nextDisabled: true });
    } else if (newFormSteps?.currentPage === formSteps.start) {
      setFormSteps({ ...newFormSteps, prevDisabled: true });
    } else {
      setFormSteps(newFormSteps);
    }
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        {formSteps?.currentPage === 1 && (
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
        )}

        {formSteps?.currentPage === 2 && (
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
        )}

        {formSteps?.currentPage === 3 && (
          <BreedFieldset
            pet={pet}
            petBreeds={petBreeds}
            dogBreeds={dogBreeds}
            setPetBreeds={setPetBreeds}
          />
        )}

        {formSteps?.currentPage === 4 && <VetFieldset pet={pet} />}
        {formSteps?.currentPage === 5 && <FoodFieldset pet={pet} />}
        {formSteps?.currentPage === 6 && (
          <Button
            type="submit"
            buttonText={pet ? "Update Dog" : "Create a new Dog"}
            $variant="primary"
          />
        )}
      </StyledForm>
      <ButtonWrapper>
        <Button
          type="button"
          buttonText="Previous"
          $variant="primary"
          onClick={handlePrevious}
          disabled={formSteps?.prevDisabled}
        />
        {formSteps?.currentPage !== 6 && (
          <Button
            type="button"
            buttonText="Next"
            $variant="primary"
            onClick={handleNext}
          />
        )}
      </ButtonWrapper>
      <Link href="/">Cancel</Link>
    </>
  );
}
