import Section from "./Section.styled";
import Label from "@/components/Label";

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
      <ul>
        <li key={price}>
          price per bag <span>{price}€</span>
        </li>
        <li key={dailyNeed}>
          daily need <span>{dailyNeed}g</span>
        </li>
        <li key={result}>
          price per day <span>{result}€</span>
        </li>
      </ul>
      <p>Current Stock: {pet.food.stock}</p>
      <button>Add new {pet.food.type === "Dry" ? "Bag" : "Can"}</button>
    </Section>
  );
}
