import Container from "@/components/Container";
import Link from "next/link";
import Form from "@/components/Form";

export default function FormPage({ addNewPet, dogData, pets, setToast }) {
  return (
    <Container>
      <h1>Create a new Dog</h1>
      <Form
        addNewPet={addNewPet}
        dogData={dogData}
        pets={pets}
        setToast={setToast}
      />
      <Link href="/">back to overview</Link>
    </Container>
  );
}
