import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  return response.json();
};

var slugify = require("slugify");

export default function App({ Component, pageProps }) {
  const { data, isLoading, error } = useSWR(
    "https://api.thedogapi.com/v1/breeds",
    fetcher
  );

  const updatedData =
    data &&
    data.map((breed) => {
      breed.slug = slugify(breed.name, { lower: true });
      return breed;
    });

  console.log(updatedData);

  const [pets, setPets] = useLocalStorageState("pets", {
    defaultValue: [],
  });

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  function handleNewPet(newPet) {
    const petsWithNewPet = [newPet, ...pets];
    setPets(petsWithNewPet);
    console.log(pets);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        addNewPet={handleNewPet}
        pets={pets}
        dogData={updatedData}
      />
    </>
  );
}
