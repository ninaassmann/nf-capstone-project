import { useState } from "react";
import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [pets, setPets] = useLocalStorageState("pets", {
    defaultValue: [],
  });

  function handleNewPet(newPet) {
    const petsWithNewPet = [newPet, ...pets];
    setPets(petsWithNewPet);
    console.log(pets);
  }

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} addNewPet={handleNewPet} pets={pets} />
    </>
  );
}
