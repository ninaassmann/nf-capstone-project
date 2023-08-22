import { css, styled } from "styled-components";

export default function FoodFieldset({ pet }) {
  return (
    <StyledFieldset $isHighlight>
      <legend>Food Information</legend>

      <InputWrapper>
        <label htmlFor="foodName">Name</label>
        <StyledInput
          type="text"
          id="foodName"
          name="foodName"
          placeholder="Enter the name of the food"
          defaultValue={pet && pet.food.name}
        />
      </InputWrapper>

      <fieldset>
        <input type="radio" name="foodPetAge" value="Puppy" id="puppy" />
        <label htmlFor="puppy">Puppy</label>

        <input type="radio" name="foodPetAge" value="Adult" id="adult" />
        <label htmlFor="adult">Adult</label>

        <input type="radio" name="foodPetAge" value="Senior" id="senior" />
        <label htmlFor="senior">Senior</label>
      </fieldset>

      <InputWrapper>
        <label htmlFor="foodNotes">Notes</label>
        <StyledInput
          type="text"
          id="foodNotes"
          name="foodNotes"
          placeholder="Do you want to add some Notes? (e.g. Diet, Alergies, ...)"
          defaultValue={pet && pet.food.notes}
        />
      </InputWrapper>

      <fieldset>
        <legend>Type</legend>
        <input type="radio" name="foodType" value="Dry" id="dry" />
        <label htmlFor="wet">Dry</label>

        <input type="radio" name="foodType" value="Wet" id="wet" />
        <label htmlFor="dry">Wet</label>
      </fieldset>

      <InputWrapper>
        <label htmlFor="foodPackageSize">Pachage Size (g)</label>
        <StyledInput
          type="number"
          id="foodPackageSize"
          name="foodPackageSize"
          defaultValue={pet && pet.food.packageSize}
        />
      </InputWrapper>

      <InputWrapper>
        <label htmlFor="foodPackageSize">Package Price (€)</label>
        <StyledInput
          type="number"
          id="foodPackagePrice"
          name="foodPackagePrice"
          defaultValue={pet && pet.food.packagePrice}
        />
      </InputWrapper>

      <InputWrapper>
        <label htmlFor="foodPackageSize">Daily Need (g)</label>
        <StyledInput
          type="number"
          id="foodDailyNeed"
          name="foodDailyNeed"
          defaultValue={pet && pet.food.dailyNeed}
        />
      </InputWrapper>

      <InputWrapper>
        <label htmlFor="foodPackageSize">Current Stock (g)</label>
        <StyledInput
          type="number"
          id="foodStock"
          name="foodStock"
          defaultValue={pet && pet.food.stock}
        />
      </InputWrapper>
    </StyledFieldset>
  );
}

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

  ${({ $isHighlight }) =>
    $isHighlight &&
    css`
      background-color: #f1f1f1;
      padding: 3rem 1rem 1rem;
      border-radius: 1rem;

      & > legend {
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

  ${({ disabled }) =>
    disabled &&
    css`
      border: none;
      background-color: #f1f1f1;
    `}
`;
