import { dogBreedHeight } from "@/data/dogBreedFilter";

export function filterDogBreeds(filter, dogData, setShowBreeds) {
  // check if both filter are set to something else
  if (filter.group !== "all" && filter.temperament !== "all") {
    const filteredBreeds =
      dogData &&
      dogData.filter(
        (breed) =>
          breed.breed_group === filter.group &&
          breed.temperament &&
          breed.temperament.includes(filter.temperament)
      );
    setShowBreeds(filteredBreeds);
  }
  // check if only the group filter is set
  else if (filter.group !== "all" && filter.temperament === "all") {
    let filteredBreeds =
      dogData && dogData.filter((breed) => breed.breed_group === filter.group);
    setShowBreeds(filteredBreeds && filteredBreeds);
  }
  // check if only the temperament filter is set
  else if (filter.temperament !== "all" && filter.group === "all") {
    const filteredBreeds =
      dogData &&
      dogData.filter(
        (breed) =>
          breed.temperament && breed.temperament.includes(filter.temperament)
      );
    setShowBreeds(filteredBreeds && filteredBreeds);
  } else if (filter.size !== "all") {
    if (filter.size === "small") {
      const filteredBreeds =
        dogData &&
        dogData.filter((breed) => {
          if (getHeight(breed) < 4) return breed;
        });
      setShowBreeds(filteredBreeds && filteredBreeds);
    } else if (filter.size === "medium") {
      const filteredBreeds =
        dogData &&
        dogData.filter((breed) => {
          if (getHeight(breed) < 6 && getHeight(breed) >= 4) return breed;
        });
      setShowBreeds(filteredBreeds && filteredBreeds);
    } else {
      const filteredBreeds =
        dogData &&
        dogData.filter((breed) => {
          if (getHeight(breed) >= 6) return breed;
        });
      setShowBreeds(filteredBreeds && filteredBreeds);
    }
  } else {
    setShowBreeds(dogData && dogData);
  }
}

function getHeight(breed) {
  const secondLastCharacter = breed.height.metric.length - 2;
  const height = breed.height.metric.charAt(secondLastCharacter);
  return height;
}
