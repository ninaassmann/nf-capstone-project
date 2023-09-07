import GlobalStyle from "../styles";
import slugify from "slugify";
import { SessionProvider } from "next-auth/react";

import useSWR, { SWRConfig } from "swr";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Head from "next/head";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "@/components/Theme";
import Layout from "@/components/Layout";

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

export default function App({ session, Component, pageProps }) {
  const [theme, setTheme] = useState("dark");
  function toggleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  const router = useRouter();
  const { data, isLoading, error } = useSWR(
    "https://api.thedogapi.com/v1/breeds",
    fetcher
  );
  const [dogBreeds, setDogBreeds] = useState([]);

  const { data: pets, mutate } = useSWR("/api/pets", fetcher, {
    fallbackData: [],
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

  // add new pet
  async function handleNewPet(newPet) {
    try {
      const response = await fetch(`/api/pets`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPet),
      });

      if (response.ok) {
        mutate();
      } else {
        console.error("Failed to create pet");
      }
    } catch (error) {
      console.error("Error creating pet:", error);
    }
  }

  // update existing pet
  async function handleUpdate(updatedPet) {
    try {
      const response = await fetch(`/api/pets/${updatedPet._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPet),
      });

      if (response.ok) {
        mutate();
      } else {
        console.error(`Failed to update ${pet.petName}:`);
      }
    } catch (error) {
      console.error(`Error updating ${pet.petName}:`, error);
    }
  }

  // delete existing pet
  async function handleDelete(petToDelete) {
    try {
      const response = await fetch(`/api/pets/${petToDelete._id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        mutate();
        router.push("/");
        console.log("success");
      } else {
        console.error(`Failed to delete ${petToDelete.petName}`);
      }
    } catch (error) {
      console.error(`Error deleting ${petToDelete.petName}:`, error);
    }
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
            <meta property="og:image" content="/pawconnect.jpg" />
          </Head>
          <SessionProvider session={session}>
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
          </SessionProvider>
        </SWRConfig>
      </ThemeProvider>
    </>
  );
}
