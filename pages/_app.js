import GlobalStyle from "../styles";
import Head from "next/head";
import { lightTheme, darkTheme } from "@/components/Theme";
import useLocalStorageState from "use-local-storage-state";
import useSWR, { SWRConfig } from "swr";
import { useRouter } from "next/router";
import { uid } from "uid";
import { useEffect, useState } from "react";
import initialPets from "@/data/pets";
import slugify from "slugify";
import Layout from "@/components/Layout";
import { ThemeProvider } from "styled-components";

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
  const [theme, setTheme] = useState("light");
  function toggleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  const router = useRouter();
  const { data, isLoading, error } = useSWR(
    "https://api.thedogapi.com/v1/breeds",
    fetcher
  );
  const [dogBreeds, setDogBreeds] = useState([]);
  const [pets, setPets] = useLocalStorageState("pets", {
    defaultValue: initialPets,
  });

  const [toast, setToast] = useState(false);

  useEffect(() => {
    const addSlugToData =
      data &&
      data.map((breed) => {
        const updatedBreed = {
          ...breed,
          slug: slugify(breed.name, { lower: true }),
        };
        return updatedBreed;
      });
    setDogBreeds(addSlugToData);
  }, [data]);

  if (toast === true) {
    setTimeout(() => {
      setToast(false);
    }, 3000);
  }

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

    router.push("/");
    setPets(petsWithoutDeletedPet);
  }

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <SWRConfig value={{ fetcher }}>
          <Head>
            <meta name="keywords" content="pawconnect, pets, manager, breeds" />
            <meta name="author" content="Nina Assmann" />
            <title>PawConnect</title>
            <meta
              name="description"
              content="This is a management App for your pets."
            />
          </Head>
          <Layout theme={theme} toggleTheme={toggleTheme}>
            <Component
              {...pageProps}
              addNewPet={handleNewPet}
              updatePets={handleUpdate}
              handleDelete={handleDelete}
              pets={pets}
              dogBreeds={dogBreeds}
              toast={toast}
              setToast={setToast}
            />
          </Layout>
        </SWRConfig>
      </ThemeProvider>
    </>
  );
}
