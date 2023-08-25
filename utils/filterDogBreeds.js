// got some help from chatGPT to optimize my functions, check older commits for the process
// it's still a lot of code, that's why I added some comments to explain the single functions

export function filterDogBreeds(filter, dogBreeds, setBreedsToShow) {
  let filteredBreeds = [];

  if (filter.temperament !== "all" && filter.size !== "all") {
    filteredBreeds = dogBreeds.filter((breed) =>
      handleAllFilters(breed, filter)
    );
  }

  // check if the group filter is set
  else if (filter.group !== "all") {
    // check if the group and temperament filter is set
    if (filter.temperament !== "all") {
      filteredBreeds = dogBreeds.filter((breed) =>
        handleGroupAndTemperament(breed, filter)
      );
    }
    // check if the group and size filter is set
    else if (filter.size !== "all") {
      filteredBreeds = dogBreeds.filter((breed) =>
        handleGroupAndSize(breed, filter)
      );
    }
    // check if ONLY the group filter is set
    else {
      filteredBreeds = dogBreeds.filter(
        (breed) => breed.breed_group === filter.group
      );
    }
  }
  // check if the temperament filter is set
  else if (filter.temperament !== "all") {
    // check if the temperament and size filter is set
    if (filter.size !== "all") {
      filteredBreeds = dogBreeds.filter((breed) =>
        handleTemperamentAndSize(breed, filter)
      );
    }
    // check if ONLY the temperament filter is set
    else {
      filteredBreeds = dogBreeds.filter(
        (breed) =>
          breed.temperament && breed.temperament.includes(filter.temperament)
      );
    }
  }
  // check if only the size filter is set
  else if (filter.size !== "all") {
    filteredBreeds = dogBreeds.filter(
      (breed) =>
        (filter.size === "small" && getHeight(breed) < 4) ||
        (filter.size === "medium" &&
          getHeight(breed) < 6 &&
          getHeight(breed) >= 4) ||
        (filter.size === "large" && getHeight(breed) >= 6)
    );
  } else {
    filteredBreeds = dogBreeds;
  }

  setBreedsToShow(filteredBreeds);
}

function getHeight(breed) {
  const secondLastCharacter = breed.height.metric.length - 2;
  const height = breed.height.metric.charAt(secondLastCharacter);
  return height;
}

// all filter are set
function handleAllFilters(breed, filter) {
  return handleGroupAndTemperament(breed, filter) && handleSize(breed, filter);
}

// group and temperament filter
function handleGroupAndTemperament(breed, filter) {
  return (
    breed.breed_group === filter.group &&
    breed.temperament &&
    breed.temperament.includes(filter.temperament)
  );
}

// group and size filter
function handleGroupAndSize(breed, filter) {
  return breed.breed_group === filter.group && handleSize(breed, filter);
}

// temperament and size filter
function handleTemperamentAndSize(breed, filter) {
  return (
    breed.temperament &&
    breed.temperament.includes(filter.temperament) &&
    handleSize(breed, filter)
  );
}

// size filter
function handleSize(breed, filter) {
  return (
    (filter.size === "small" && getHeight(breed) < 4) ||
    (filter.size === "medium" &&
      getHeight(breed) < 6 &&
      getHeight(breed) >= 4) ||
    (filter.size === "large" && getHeight(breed) >= 6)
  );
}
