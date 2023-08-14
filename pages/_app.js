import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function App({ Component, pageProps }) {
  const { data, isLoading, error } = useSWR(
    "https://api.thedogapi.com/v1/breeds",
    fetcher
  );

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
        dogData={data}
      />
    </>
  );
}
