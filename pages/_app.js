import { useState } from "react";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  const [pets, setPets] = useState([]);

  function handleNewPet(newPet) {
    const petsWithNewPet = [newPet, ...pets];
    setPets(petsWithNewPet);
  }

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} addNewPet={handleNewPet} />
    </>
  );
}
