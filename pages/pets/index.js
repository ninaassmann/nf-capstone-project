import Container from "@/components/Container.styled";
import Link from "next/link";
import Form from "@/components/Form";

export default function FormPage({ addNewPet, dogBreeds, pets, setToast }) {
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
      />
      <Link href="/">back to overview</Link>
    </Container>
  );
}
