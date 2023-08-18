import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import useSWR from "swr";
import { useRouter } from "next/router";

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

const initialPets = [
  {
    id: "1",
    slug: "odin",
    petName: "Odin",
    petBreed: ["Alaskan Husky"],
    petBirthday: "2020-11-20",
    vet: {
      name: "Dr. Venthien",
      address: "ABC Str. 29, 12345 Doetown",
      phone: "132 456 789",
    },
  },
  {
    id: "2",
    mixed: true,
    petBirthday: "2020-11-20",
    petBreed: ["German Shepherd Dog"],
    petName: "Freki",
    slug: "freki",
    vet: {
      name: "Dr. Venthien",
      address: "ABC Str. 29, 12345 Doetown",
      phone: "132 456 789",
    },
  },
  {
    id: "3",
    mixed: true,
    petBirthday: "2020-11-20",
    petBreed: ["German Shepherd Dog", "Eurasier"],
    petName: "Ronya",
    slug: "ronya",
    vet: {
      name: "Dr. Venthien",
      address: "ABC Str. 29, 12345 Doetown",
      phone: "132 456 789",
    },
  },
];

export default function App({ Component, pageProps }) {
  const router = useRouter();
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

  function handleDelete(petToDelete) {
    const petsWithoutDeletedPet = pets.filter(
      (pet) => pet.slug !== petToDelete.slug
    );
    setPets(petsWithoutDeletedPet);
    router.push("/");
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        addNewPet={handleNewPet}
        handleDelete={handleDelete}
        pets={pets}
        dogData={data}
      />
    </>
  );
}
