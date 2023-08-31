import Form from "@/components/FormComponents";

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
