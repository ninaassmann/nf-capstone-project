export function dogBreedFilter(filter, dogBreeds) {
  const filteredByTemperatment =
    filter.temperament === "all"
      ? dogBreeds
      : dogBreeds?.filter((breed) => {
          return (
            breed.temperament && breed.temperament.includes(filter.temperament)
          );
        });
  console.log(filter, filteredByTemperatment);
  const filteredByBreedGroup =
    filter.group === "all"
      ? filteredByTemperatment
      : filteredByTemperatment?.filter(
          (breed) => breed.breed_group === filter.group
        );

  const filteredBySize =
    filter.size === "all"
      ? filteredByBreedGroup
      : filteredByBreedGroup?.filter((breed) => {
          return (
            (filter.size === "small" && getHeight(breed) < 4) ||
            (filter.size === "medium" &&
              getHeight(breed) < 6 &&
              getHeight(breed) >= 4) ||
            (filter.size === "large" && getHeight(breed) >= 6)
          );
        });

  return filteredBySize;
}

// get the max height of the breed to check if it's small, medium or large
// the height is given like this: ""
function getHeight(breed) {
  const secondLastCharacter = breed.height.metric.length - 2;
  const height = breed.height.metric.charAt(secondLastCharacter);
  return height;
}
