import { styled } from "styled-components";
import Section from "./Section.styled";
import Label from "@/components/Label";
import Button from "../Button";

export default function FoodSection({ pet }) {
  const size = pet.food.size;
  const price = pet.food.price;
  const dailyNeed = pet.food.dailyNeed;

  const pricePerGram = price / size;

  const result = Math.round(pricePerGram * dailyNeed * 100) / 100;
  return (
    <Section>
      <h2>Food</h2>
      <p>{pet.food.name}</p>
      {pet.food.petAge === "Puppy" && <Label>Puppy</Label>}
      {pet.food.petAge === "Senior" && <Label>Senior</Label>}
      <p>
        <span>{pet.food.type} Food</span> -{" "}
        <span>
          {size / 1000}kg {pet.food.type === "Dry" ? "Bag" : "Can"}
        </span>
      </p>
      <StyledList>
        <li key={price}>
          price per bag <span>{price}€</span>
        </li>
        <li key={dailyNeed}>
          daily need <span>{dailyNeed}g</span>
        </li>
        <li key={result}>
          price per day <span>{result}€</span>
        </li>
      </StyledList>
      <p>Current Stock: {size / 1000}kg</p>
      <Button
        buttonText={pet.food.type === "Dry" ? "Add Bag" : "Add Can"}
        type="button"
        $variant="secondary"
      />
    </Section>
  );
}

const StyledList = styled.ul`
  list-style-type: none;
  margin: 2rem 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 0.25rem;

  & li {
    width: 100%;
    padding: 0.5rem 0.25rem 0.75rem;
    & span {
      float: right;
    }
  }

  & li:not(:last-of-type) {
    border-bottom: 1px solid;
  }
`;
