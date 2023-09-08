import Form from "@/components/FormComponents";

export default function FormPage({ addNewPet, dogBreeds, pets, setToast }) {
  return (
    <Form
      addNewPet={addNewPet}
      dogBreeds={dogBreeds}
      pets={pets}
      setToast={setToast}
    />
  );
}
