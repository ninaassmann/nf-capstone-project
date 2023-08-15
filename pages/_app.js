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

  const [pets, setPets] = useLocalStorageState("pets", {
    defaultValue: [],
  });

  console.log(pets);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  function handleNewPet(newPet) {
    const petsWithNewPet = [newPet, ...pets];
    setPets(petsWithNewPet);
    console.log(pets);
  }

  function calculateAge(birthday) {
    const date = new Date();
    const birthdayDate = new Date(birthday);
    const difference = date.getTime() - birthdayDate.getTime();
    let months = Math.floor(difference / 2629746000);
    const years = Math.floor(months / 12);
    months = months - 12 * years;
    const age = `${years}.${months} years`;

    if (years > 1) return age;
    return `${months} months`;
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        addNewPet={handleNewPet}
        calculateAge={calculateAge}
        pets={pets}
        dogData={data}
      />
    </>
  );
}
