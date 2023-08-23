export function calculatePricePerDay(pet) {
  const size = pet.food.size;
  const price = pet.food.price;
  const dailyNeed = pet.food.dailyNeed;

  const pricePerGram = price / size;
  let pricePerDay = pricePerGram * dailyNeed;
  pricePerDay = parseFloat(pricePerDay);
  pricePerDay = pricePerDay.toFixed(2);

  return pricePerDay;
}
