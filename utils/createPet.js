import { handleExistingPetName } from "./handleExistingPetName";
import { uid } from "uid";

const slugify = require("slugify");

export function createPet(data, pet, pets, petBreeds) {
  console.log(petBreeds);
  const dataPet = {
    id: pet ? pet.id : uid(),
    slug: pet
      ? pet.slug
      : slugify(handleExistingPetName(data.petName, pets), { lower: true }),
    petName: pet ? pet.petName : data.petName,
    petBreed: petBreeds.map((breed) => breed.breed),
    petBirthday: data.petBirthday,
    vet: {
      name: data.vetName,
      address: data.vetAddress,
      phone: data.vetPhone,
    },
  };

  if (
    dataPet.petBreed.length > 1 ||
    dataPet.petBreed.includes("breed unknown")
  ) {
    dataPet.mixed = true;
  } else {
    dataPet.mixed = false;
  }

  return dataPet;
}
