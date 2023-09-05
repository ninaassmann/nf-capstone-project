import Container from "@/components/Container.styled";
import Link from "next/link";
import Form from "@/components/FormComponents";
import { useRouter } from "next/router";
import BackLink from "@/components/BackLink";

export default function FormPage({ pets, dogBreeds, updatePets, setToast }) {
  const router = useRouter();
  const { slug } = router.query;

  const pet = pets.find((pet) => slug === pet.slug);
  return (
    <>
      <Form
        pet={pet}
        dogBreeds={dogBreeds}
        pets={pets}
        updatePets={updatePets}
        setToast={setToast}
      />
    </>
  );
}
