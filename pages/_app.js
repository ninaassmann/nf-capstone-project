import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import useSWR from "swr";
import { useRouter } from "next/router";
import { uid } from "uid";
import { useState } from "react";
import initialPets from "@/data/pets";

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

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { data, isLoading, error } = useSWR(
    "https://api.thedogapi.com/v1/breeds",
    fetcher
  );

  const [pets, setPets] = useLocalStorageState("pets", {
    defaultValue: initialPets,
  });

  const [toast, setToast] = useState(true);

  /* if (toast === true) {
    setTimeout(() => {
      setToast(false);
    }, 3000);
  } */

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  function handleNewPet(newPet) {
    newPet.id = uid();
    const petsWithNewPet = [newPet, ...pets];
    setPets(petsWithNewPet);
  }

  function handleUpdate(updatedPet) {
    const updatedPets = pets.map((pet) => {
      if (updatedPet.id !== pet.id) {
        return pet;
      }
      return updatedPet;
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
        toast={toast}
        setToast={setToast}
      />
    </>
  );
}
