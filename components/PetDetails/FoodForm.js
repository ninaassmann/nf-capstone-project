import { styled } from "styled-components";
import Input from "../Form/Input.styled";
import Button from "../Button";

export default function FoodForm({ handleAddFood }) {
  return (
    <StyledForm onSubmit={handleAddFood}>
      <StyledInput type="number" name="count" defaultValue="1" />
      <Button buttonText="refill" type="submit" $variant="secondary" />
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  & button {
    margin: 0;
  }
`;

const StyledInput = styled(Input)`
  width: 30%;
  border: none;
`;
