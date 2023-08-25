import { dogBreedHeight } from "@/data/dogBreedFilter";

export function filterDogBreeds(filter, dogData, setShowBreeds) {
  const groupOnly =
    filter.group !== "all" &&
    filter.temperament === "all" &&
    filter.size === "all";
  const temperamentOnly =
    filter.temperament !== "all" &&
    filter.group === "all" &&
    filter.size === "all";
  const sizeOnly =
    filter.size !== "all" &&
    filter.group === "all" &&
    filter.temperament === "all";

  const groupAndTemperament =
    filter.group !== "all" &&
    filter.temperament !== "all" &&
    filter.size === "all";
  const groupAndSize =
    filter.group !== "all" &&
    filter.temperament === "all" &&
    filter.size !== "all";
  const temperamentAndSize =
    filter.group === "all" &&
    filter.temperament !== "all" &&
    filter.size !== "all";

  const allFilter =
    filter.group !== "all" &&
    filter.temperament !== "all" &&
    filter.size !== "all";
  // check if both group and temperament are set but not size
  if (allFilter) {
    const filteredBreeds =
      dogData &&
      dogData.filter(
        (breed) =>
          breed.breed_group === filter.group &&
          breed.temperament &&
          breed.temperament.includes(filter.temperament) &&
          ((filter.size === "small" && getHeight(breed) < 4) ||
            (filter.size === "medium" &&
              getHeight(breed) < 6 &&
              getHeight(breed) >= 4) ||
            (filter.size === "large" && getHeight(breed) >= 6))
      );
    setShowBreeds(filteredBreeds);
  } else if (groupAndTemperament) {
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
  // check if both group and size are set but not temperament
  else if (groupAndSize) {
    const filteredBreeds =
      dogData &&
      dogData.filter(
        (breed) =>
          breed.breed_group === filter.group &&
          ((filter.size === "small" && getHeight(breed) < 4) ||
            (filter.size === "medium" &&
              getHeight(breed) < 6 &&
              getHeight(breed) >= 4) ||
            (filter.size === "large" && getHeight(breed) >= 6))
      );
    setShowBreeds(filteredBreeds);
  }
  // check if both temperament and size are set but not size
  else if (temperamentAndSize) {
    const filteredBreeds =
      dogData &&
      dogData.filter(
        (breed) =>
          breed.temperament &&
          breed.temperament.includes(filter.temperament) &&
          ((filter.size === "small" && getHeight(breed) < 4) ||
            (filter.size === "medium" &&
              getHeight(breed) < 6 &&
              getHeight(breed) >= 4) ||
            (filter.size === "large" && getHeight(breed) >= 6))
      );
    setShowBreeds(filteredBreeds);
  }
  // check if only the group filter is set
  else if (groupOnly) {
    let filteredBreeds =
      dogData && dogData.filter((breed) => breed.breed_group === filter.group);
    setShowBreeds(filteredBreeds && filteredBreeds);
  }
  // check if only the temperament filter is set
  else if (temperamentOnly) {
    const filteredBreeds =
      dogData &&
      dogData.filter(
        (breed) =>
          breed.temperament && breed.temperament.includes(filter.temperament)
      );
    setShowBreeds(filteredBreeds && filteredBreeds);
  }
  // check if only the height is set
  else if (sizeOnly) {
    const filteredBreeds =
      dogData &&
      dogData.filter(
        (breed) =>
          (filter.size === "small" && getHeight(breed) < 4) ||
          (filter.size === "medium" &&
            getHeight(breed) < 6 &&
            getHeight(breed) >= 4) ||
          (filter.size === "large" && getHeight(breed) >= 6)
      );
    setShowBreeds(filteredBreeds);
  } else {
    setShowBreeds(dogData && dogData);
  }
}

function getHeight(breed) {
  const secondLastCharacter = breed.height.metric.length - 2;
  const height = breed.height.metric.charAt(secondLastCharacter);
  return height;
}
