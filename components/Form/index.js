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
import Puppies from "../icons/Puppies";
import { styled } from "styled-components";
import initialPageOptions from "@/data/formStepsOptions";
import Image from "next/image";

var today = new Date().toISOString().split("T")[0];

export default function Form({
  addNewPet,
  updatePets,
  dogBreeds,
  pets,
  pet,
  setToast,
}) {
  const router = useRouter();
  const [formSteps, setFormSteps] = useState(initialPageOptions);

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
    if (formSteps.currentStep === 4 || formSteps.currentStep === 6) {
      newFormSteps = {
        ...formSteps,
        currentStep: formSteps.currentStep + 2,
        prevDisabled: false,
      };
    } else if (formSteps.currentStep < formSteps.end) {
      newFormSteps = {
        ...formSteps,
        currentStep: formSteps.currentStep + 1,
        prevDisabled: false,
      };
    }
    checkPage(newFormSteps);
  }

  function handlePrevious() {
    if (formSteps.currentStep > formSteps.start) {
      newFormSteps = {
        ...formSteps,
        currentStep: formSteps.currentStep - 1,
        nextDisabled: false,
      };
    }
    checkPage(newFormSteps);
  }

  function checkPage(newFormSteps) {
    if (newFormSteps?.currentStep === formSteps.end) {
      setFormSteps({ ...newFormSteps, nextDisabled: true });
    } else if (newFormSteps?.currentStep === formSteps.start) {
      setFormSteps({ ...newFormSteps, prevDisabled: true });
    } else {
      setFormSteps(newFormSteps);
    }
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit} $isStepForm>
        {formSteps && <h1>{formSteps.headlines[formSteps.currentStep]}</h1>}

        <Article>
          {formSteps?.currentStep === 1 && (
            <Step>
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
            </Step>
          )}

          {formSteps?.currentStep === 2 && (
            <Step>
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
            </Step>
          )}

          {formSteps?.currentStep === 3 && (
            <Step>
              <BreedFieldset
                pet={pet}
                petBreeds={petBreeds}
                dogBreeds={dogBreeds}
                setPetBreeds={setPetBreeds}
              />
            </Step>
          )}

          {formSteps?.currentStep === 4 && (
            <Step>
              <ButtonWrapper $isColumn>
                <Button
                  buttonText="Yes"
                  $variant="primary"
                  onClick={handleNext}
                />
                <Button
                  buttonText="No"
                  $variant="secondary"
                  onClick={handleNext}
                />
              </ButtonWrapper>
            </Step>
          )}

          {formSteps?.currentStep === 5 && (
            <Step>
              <VetFieldset pet={pet} />
            </Step>
          )}
          {formSteps?.currentStep === 6 && (
            <Step>
              <ButtonWrapper $isColumn>
                <Button
                  buttonText="Yes"
                  $variant="primary"
                  onClick={handleNext}
                />
                <Button
                  buttonText="No"
                  $variant="secondary"
                  onClick={handleNext}
                />
              </ButtonWrapper>
            </Step>
          )}
          {formSteps?.currentStep === 7 && (
            <Step>
              <FoodFieldset pet={pet} />
            </Step>
          )}
          <ButtonWrapper>
            <Button
              type="button"
              buttonText="Previous"
              $variant="secondary"
              onClick={handlePrevious}
              disabled={formSteps?.prevDisabled}
              $isStepButton
            />

            {formSteps?.currentStep === 8 ? (
              <Step>
                <Button
                  type="submit"
                  buttonText={pet ? "Update Dog" : "Create my Dog"}
                  $variant="submit"
                />
              </Step>
            ) : (
              <Button
                type="button"
                buttonText="Next"
                $variant="primary"
                onClick={handleNext}
                disabled={formSteps?.questions.includes(formSteps.currentStep)}
                $isStepButton
              />
            )}
          </ButtonWrapper>
          <Link href="/">Cancel</Link>
        </Article>
      </StyledForm>
    </>
  );
}

const Step = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`;

const Article = styled.article`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  flex-grow: 2;
  gap: 1rem;
`;
