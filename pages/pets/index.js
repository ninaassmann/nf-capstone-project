import Form from "@/components/Form";

export default function FormPage({ addNewPet, dogBreeds, pets, setToast }) {
  if (!pets) {
    return <p>...loading</p>;
  }
  return (
    <Form
      addNewPet={addNewPet}
      dogBreeds={dogBreeds}
      pets={pets}
      setToast={setToast}
    />
  );
}
