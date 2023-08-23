import { styled } from "styled-components";
import Section from "./Section.styled";
import Label from "@/components/Label.styled";
import { useEffect, useState } from "react";
import FoodForm from "./FoodForm";
import { checkFeedingTime } from "@/utils/checkFeedingTime";
import { calculatePricePerDay } from "@/utils/calculatePricePerDay";

export default function FoodSection({ pet, updatePets }) {
  const [foodStock, setFoodStock] = useState(pet.food.stock);
  const [itsFeedingTime, setItsFeedingTime] = useState();

  const pricePerDay = calculatePricePerDay(pet);

  setInterval(() => {
    setItsFeedingTime(checkFeedingTime());
  }, 3600000);

  if (itsFeedingTime) {
    const updatedStock = Number(foodStock) - Number(dailyNeed);

    setFoodStock(updatedStock);

    const updatedPet = pet;
    updatedPet.food.stock = updatedStock;
    updatePets(updatedPet);
    setItsFeedingTime(false);
  }

  function handleAddFood(event) {
    event.preventDefault();
    const count = event.target.count.value;
    const updatedStock = Number(foodStock) + Number(size) * Number(count);

    setFoodStock(updatedStock);

    const updatedPet = pet;
    updatedPet.food.stock = updatedStock;
    updatePets(updatedPet);
  }

  return (
    <Section>
      <h2>Food</h2>
      <p>{pet.food.name}</p>
      {pet.food.petAge === "Puppy" && <Label>Puppy</Label>}
      {pet.food.petAge === "Senior" && <Label>Senior</Label>}
      <p>
        <span>{pet.food.type} Food</span> -{" "}
        <span>
          {pet.food.size / 1000}kg {pet.food.type === "Dry" ? "Bag" : "Can"}
        </span>
      </p>
      <StyledList>
        <li key={pet.food.price}>
          price per bag <span>{pet.food.price}€</span>
        </li>
        <li key={pet.food.dailyNeed}>
          daily need <span>{pet.food.dailyNeed}g</span>
        </li>
        <li key={pricePerDay}>
          price per day <span>{pricePerDay}€</span>
        </li>
      </StyledList>
      <h4>Current Stock: {foodStock}g</h4>
      <p>
        <small>
          Your stock updates every day (20:30) depending on the daily need.
        </small>
      </p>

      <FoodForm handleAddFood={handleAddFood} />
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
