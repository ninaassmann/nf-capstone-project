import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import useSWR from "swr";
import { useRouter } from "next/router";
import { uid } from "uid";
import { useState } from "react";

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
    petBirthday: "2023-01-05",
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
    mixed: false,
    petBirthday: "2023-08-15",
    petBreed: ["Eurasier"],
    petName: "Puppy",
    slug: "puppy",
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

  const [toastState, setToastState] = useState(false);

  if (toastState === true) {
    setTimeout(() => {
      setToastState(false);
    }, 3000);
  }

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  function handleNewPet(newPet) {
    newPet.id = uid();
    const petsWithNewPet = [newPet, ...pets];
    setPets(petsWithNewPet);
  }

  function handleUpdate(updatePet) {
    const updatedPets = pets.map((pet) => {
      if (updatePet.id !== pet.id) {
        return pet;
      }
      return updatePet;
    });
    setPets(updatedPets);
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
        updatePets={handleUpdate}
        handleDelete={handleDelete}
        pets={pets}
        dogData={data}
        toastState={toastState}
        setToastState={setToastState}
      />
    </>
  );
}
