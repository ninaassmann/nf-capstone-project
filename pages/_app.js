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

const initialPets = [
  {
    id: 1,
    slug: "odin",
    petName: "Odin",
    petBreed: ["Alaskan Husky"],
    petBirthday: "2020-11-20",
  },
  {
    id: "2",
    mixed: true,
    petBirthday: "2020-11-20",
    petBreed: ["German Shepherd Dog"],
    petName: "Freki",
    slug: "freki",
  },
];

export default function App({ Component, pageProps }) {
  const { data, isLoading, error } = useSWR(
    "https://api.thedogapi.com/v1/breeds",
    fetcher
  );

  const [pets, setPets] = useLocalStorageState("pets", {
    defaultValue: initialPets,
  });

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  function handleNewPet(newPet) {
    const petsWithNewPet = [newPet, ...pets];
    setPets(petsWithNewPet);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        addNewPet={handleNewPet}
        pets={pets}
        dogData={data}
      />
    </>
  );
}
