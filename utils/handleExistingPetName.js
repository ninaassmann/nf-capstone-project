export function handleExistingPetName(name, pets) {
  const petNameExisting = pets && pets.filter((pet) => pet.petName === name);

  const count = petNameExisting?.length;
  if (petNameExisting?.length === 0) {
    return name;
  }
  return `${name}-${count}`;
}
