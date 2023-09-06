import { useRouter } from "next/router";
import { useState } from "react";
import { styled } from "styled-components";

import Link from "next/link";

import Button from "../Button";
import ButtonWrapper from "../ButtonWrapper.styled";

import StyledForm from "./Form.styled";
import Wrapper from "./Wrapper.styled";
import Input from "./Input.styled";
import VetFieldset from "./VetFieldset";
import BreedFieldset from "./BreedFieldset";
import FoodFieldset from "./FoodFieldset";

import initialPageOptions from "@/data/formStepsOptions";
import { uid } from "uid";
import { handleExistingPetName } from "@/utils/handleExistingPetName";
import { ErrorWrapper, Errortext } from "./Error.styled";
import Fieldset from "./Fieldset.styled";
import StyledLabel from "./Label.styled";
import StyledRadio from "./Radio.styled";
import BackLink from "../BackLink";

var today = new Date().toISOString().split("T")[0];
const slugify = require("slugify");

const initialErrorOptions = {
  hidden: true,
  name: "Please insert a name.",
  gender: "Please select the gender.",
  birthday: "Please insert a birthday.",
  breed: "Please select a breed.",
};

export default function Form({
  addNewPet,
  updatePets,
  dogBreeds,
  pets,
  pet,
  setToast,
}) {
  const initialPetBreeds = pet ? pet.petBreed : [];

  const router = useRouter();

  const [formSteps, setFormSteps] = useState(initialPageOptions);
  const [errorMessages, setErrorMessages] = useState(initialErrorOptions);

  const [petBreeds, setPetBreeds] = useState(initialPetBreeds);
  const [newPet, setNewPet] = useState(pet ? pet : {});
  const [vet, setVet] = useState(pet ? pet.vet : {});
  const [food, setFood] = useState(pet ? pet.food : {});

  // handle general input changes
  function handleChange(event) {
    setErrorMessages({ ...errorMessages, hidden: true });
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const updatePet = {
      ...newPet,
      vet: vet,
      food: food,
      petBreed: petBreeds,
    };
    updatePet[fieldName] = fieldValue;
    setNewPet(updatePet);
  }

  // handle the form submit
  function handleSubmit(event) {
    event.preventDefault();

    const dataPet = newPet;

    dataPet.slug = pet
      ? pet.slug
      : slugify(handleExistingPetName(dataPet.petName, pets), { lower: true });
    dataPet.petBreed = petBreeds && petBreeds;
    dataPet.vet = vet && vet;
    dataPet.food = food && food;

    setToast(true);
    // update or new pet
    pet ? updatePets(dataPet) : addNewPet(dataPet);
    pet ? router.push(`/pets/${pet.slug}`) : router.push("/");
  }

  // validate on step changes
  function validate() {
    if (pet && formSteps.currentStep === 1) {
      return true;
    } else if (
      (!newPet.petName && formSteps.currentStep === 1) ||
      (!newPet.gender && formSteps.currentStep === 1) ||
      (!newPet.petBirthday && formSteps.currentStep === 2) ||
      (petBreeds < 1 && formSteps.currentStep === 3)
    ) {
      setErrorMessages({ ...errorMessages, hidden: false });
      return false;
    } else return true;
  }

  // handle step changes
  let newFormSteps = {};
  function handleNext(no) {
    const validateForm = validate();
    if (validateForm) {
      setErrorMessages({ ...errorMessages, hidden: true });
      if (
        (formSteps.currentStep === 4 && no === "no") ||
        (formSteps.currentStep === 6 && no === "no")
      ) {
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
    } else {
      return;
    }
  }

  function handlePrevious() {
    setErrorMessages({ ...errorMessages, hidden: true });
    if (formSteps.currentStep > formSteps.start) {
      newFormSteps = {
        ...formSteps,
        currentStep: formSteps.currentStep - 1,
        nextDisabled: false,
      };
    }
    checkPage(newFormSteps);
  }

  // disable next / prev button when needed
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
    <StyledForm onSubmit={(event) => handleSubmit(event)} $isStepForm>
      {formSteps && (
        <h1 id="title">{formSteps.headlines[formSteps.currentStep]}</h1>
      )}

      <Article>
        {formSteps?.currentStep === 1 && (
          <Step aria-labelledby="title">
            <Wrapper>
              <label htmlFor="petName">What is the name of your dog?</label>
              {pet && <small>You can not update the Name</small>}
              <Input
                type="text"
                id="petName"
                name="petName"
                placeholder="Enter the name of your pet"
                defaultValue={pet?.petName || newPet?.petName}
                maxLength="20"
                pattern="^[A-Za-z ]+$"
                disabled={pet}
                onChange={(event) => handleChange(event)}
              />
              <Fieldset>
                <Wrapper $isRow>
                  <StyledLabel htmlFor="male">
                    <StyledRadio
                      type="radio"
                      name="gender"
                      value="Male"
                      id="male"
                      onChange={(event) => handleChange(event)}
                      checked={
                        pet?.gender === "Male" || newPet?.gender === "Male"
                      }
                    />
                    Male
                  </StyledLabel>

                  <StyledLabel htmlFor="female">
                    <StyledRadio
                      type="radio"
                      name="gender"
                      value="Female"
                      id="female"
                      onChange={(event) => handleChange(event)}
                      checked={
                        pet?.gender === "Female" || newPet?.gender === "Female"
                      }
                    />
                    Female
                  </StyledLabel>
                </Wrapper>
              </Fieldset>
              <ErrorWrapper>
                {!pet && (
                  <>
                    <Errortext>
                      {!errorMessages.hidden &&
                        !newPet.petName &&
                        errorMessages.name}
                    </Errortext>
                    <Errortext>
                      {!errorMessages.hidden &&
                        !newPet.gender &&
                        errorMessages.gender}
                    </Errortext>
                  </>
                )}
              </ErrorWrapper>
            </Wrapper>
          </Step>
        )}

        {formSteps?.currentStep === 2 && (
          <Step aria-labelledby="title">
            <Wrapper>
              <label htmlFor="petBirthday">Birthday</label>
              <Input
                type="date"
                id="petBirthday"
                name="petBirthday"
                min="2000-01-01"
                max={today}
                defaultValue={pet?.petBirthday || newPet?.petBirthday}
                onChange={(event) => handleChange(event)}
              />
              <ErrorWrapper>
                {!pet && (
                  <Errortext>
                    {!errorMessages.hidden && errorMessages.birthday}
                  </Errortext>
                )}
              </ErrorWrapper>
            </Wrapper>
          </Step>
        )}

        {formSteps?.currentStep === 3 && (
          <Step aria-labelledby="title">
            <BreedFieldset
              petBreeds={petBreeds}
              dogBreeds={dogBreeds}
              setPetBreeds={setPetBreeds}
              errorMessages={errorMessages}
              setErrorMessages={setErrorMessages}
            />
          </Step>
        )}

        {formSteps?.currentStep === 4 && (
          <Step aria-labelledby="title">
            <ButtonWrapper $isColumn>
              <Button
                buttonText="Yes"
                $variant="primary"
                onClick={handleNext}
              />
              <Button
                buttonText="No"
                $variant="secondary"
                onClick={() => handleNext("no")}
              />
            </ButtonWrapper>
          </Step>
        )}

        {formSteps?.currentStep === 5 && (
          <Step aria-labelledby="title">
            <VetFieldset pet={pet} newPet={newPet} vet={vet} setVet={setVet} />
          </Step>
        )}
        {formSteps?.currentStep === 6 && (
          <Step aria-labelledby="title">
            <ButtonWrapper $isColumn>
              <Button
                buttonText="Yes"
                $variant="primary"
                onClick={handleNext}
              />
              <Button
                buttonText="No"
                $variant="secondary"
                onClick={() => handleNext("no")}
              />
            </ButtonWrapper>
          </Step>
        )}
        {formSteps?.currentStep === 7 && (
          <Step aria-labelledby="title">
            <FoodFieldset
              pet={pet}
              newPet={newPet}
              food={food}
              setFood={setFood}
            />
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

          {formSteps?.currentStep !== 8 ? (
            <Button
              type="button"
              buttonText="Next"
              $variant="primary"
              onClick={handleNext}
              disabled={formSteps?.questions.includes(formSteps.currentStep)}
              $isStepButton
            />
          ) : (
            <Step aria-labelledby="title">
              <Button
                type="submit"
                buttonText={pet ? "Update" : "Create"}
                $variant="submit"
              />
            </Step>
          )}
        </ButtonWrapper>
        {pet ? (
          <BackLink link={`/pets/${pet.slug}`} linkText="Cancel" />
        ) : (
          <BackLink link="/" linkText="back to overview" />
        )}
      </Article>
    </StyledForm>
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
