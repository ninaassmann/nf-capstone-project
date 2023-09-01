import { css, styled } from "styled-components";
import Fieldset from "./Fieldset.styled";
import Wrapper from "./Wrapper.styled";
import Input from "./Input.styled";
import Description from "../Description";

export default function FoodFieldset({ pet, newPet, food, setFood }) {
  function handleChange(event, key) {
    const fieldName = key;
    const fieldValue = event.target.value;

    const updateFood = {
      ...food,
    };
    updateFood[fieldName] = fieldValue;
    setFood(updateFood);
  }

  return (
    <Fieldset $isHighlight>
      <legend>Food Information</legend>

      <Wrapper>
        <label htmlFor="foodName">Name</label>
        <Input
          type="text"
          id="foodName"
          name="foodName"
          placeholder="Enter the name of the food"
          defaultValue={pet && pet.food.name}
          onChange={(event) => handleChange(event, "name")}
        />
      </Wrapper>

      <StyledFieldset>
        <Wrapper $isRow>
          <StyledLabel htmlFor="puppy">
            <StyledRadio
              type="radio"
              name="foodPetAge"
              value="Puppy"
              id="puppy"
              checked={pet && pet.food.petAge === "Puppy"}
              onChange={(event) => handleChange(event, "petAge")}
            />
            Puppy
          </StyledLabel>

          <StyledLabel htmlFor="adult">
            <StyledRadio
              type="radio"
              name="foodPetAge"
              value="Adult"
              id="adult"
              checked={pet && pet.food.petAge === "Adult"}
              onChange={(event) => handleChange(event, "petAge")}
            />
            Adult
          </StyledLabel>

          <StyledLabel htmlFor="senior">
            <StyledRadio
              type="radio"
              name="foodPetAge"
              value="Senior"
              id="senior"
              checked={pet && pet.food.petAge === "Senior"}
              onChange={(event) => handleChange(event, "petAge")}
            />
            Senior
          </StyledLabel>
        </Wrapper>
      </StyledFieldset>

      <StyledFieldset>
        <p>
          <small>
            Dry food typically comes in Bags, Wet food in Cans. Currently there
            is no option for barf.
          </small>
        </p>
        <Wrapper $isRow>
          <StyledLabel htmlFor="dry">
            <StyledRadio
              type="radio"
              name="foodType"
              value="Dry"
              id="dry"
              checked={pet && pet.food.type === "Dry"}
              onChange={(event) => handleChange(event, "type")}
            />
            Dry
          </StyledLabel>

          <StyledLabel htmlFor="wet">
            <StyledRadio
              type="radio"
              name="foodType"
              value="Wet"
              id="wet"
              checked={pet && pet.food.type === "Wet"}
              onChange={(event) => handleChange(event, "type")}
            />
            Wet
          </StyledLabel>
        </Wrapper>
      </StyledFieldset>

      <Wrapper>
        <label htmlFor="foodNotes">Notes</label>
        <Input
          type="text"
          id="foodNotes"
          name="foodNotes"
          placeholder="Do you want to add some Notes? (e.g. Diet, Alergies, ...)"
          defaultValue={pet && pet.food.notes}
          onChange={(event) => handleChange(event, "notes")}
        />
      </Wrapper>

      <Wrapper>
        <label htmlFor="foodPackageSize">Package Size (g)</label>
        <Description text="Please enter the size of one package" />
        <Input
          type="number"
          id="foodPackageSize"
          name="foodPackageSize"
          defaultValue={pet && pet.food.size}
          onChange={(event) => handleChange(event, "size")}
        />
      </Wrapper>
      <Wrapper>
        <label htmlFor="foodPackagePrice">Package Price (€)</label>
        <Description text="Please enter the price of one package" />
        <Input
          type="number"
          id="foodPackagePrice"
          name="foodPackagePrice"
          step=".01"
          defaultValue={pet && pet.food.price}
          onChange={(event) => handleChange(event, "price")}
        />
      </Wrapper>

      <Wrapper>
        <label htmlFor="foodDailyNeed">Daily Need (g)</label>
        <Description text="How much food does your pet gets a day?" />
        <Input
          type="number"
          id="foodDailyNeed"
          name="foodDailyNeed"
          defaultValue={pet && pet.food.dailyNeed}
          onChange={(event) => handleChange(event, "dailyNeed")}
        />
      </Wrapper>

      <Wrapper>
        <label htmlFor="foodStock">Current Stock (g)</label>
        <Description text="Please enter the amount of food you have currently at home" />
        <Input
          type="number"
          id="foodStock"
          name="foodStock"
          defaultValue={pet && pet.food.stock}
          onChange={(event) => handleChange(event, "stock")}
        />
      </Wrapper>
    </Fieldset>
  );
}

const StyledFieldset = styled.fieldset`
  border: none;
  width: 100%;
`;

const StyledLabel = styled.label`
  position: relative;
  width: 100%;
  text-align: center;
  background: white;
  padding: 1rem 1rem;
  border-radius: 0.5rem;
`;

const StyledRadio = styled.input`
  /* appearance: none; */
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
`;
