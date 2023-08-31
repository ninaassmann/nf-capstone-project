import Container from "@/components/Container.styled";
import Form from "@/components/Form";
import { useState } from "react";

const initialPageOptions = {
  start: 1,
  end: 6,
  currentPage: 1,
  prevDisabled: true,
  nextDisabled: false,
};

export default function FormPage({ addNewPet, dogBreeds, pets, setToast }) {
  const [formSteps, setFormSteps] = useState(initialPageOptions);
  if (!pets) {
    return <p>...loading</p>;
  }
  return (
    <Container>
      <h1>Create a new Dog</h1>
      <Form
        addNewPet={addNewPet}
        dogBreeds={dogBreeds}
        pets={pets}
        setToast={setToast}
        formSteps={formSteps}
        setFormSteps={setFormSteps}
      />
    </Container>
  );
}
