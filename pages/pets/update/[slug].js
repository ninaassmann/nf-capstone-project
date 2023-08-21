import Container from "@/components/Container";
import Link from "next/link";
import Form from "@/components/Form";
import { useRouter } from "next/router";

export default function FormPage({ pets, dogData, updatePets }) {
  const router = useRouter();
  const { slug } = router.query;

  const pet = pets.find((pet) => slug === pet.slug);
  return (
    <Container>
      <h1>Update {pet.petName}</h1>
      <Form pet={pet} dogData={dogData} pets={pets} updatePets={updatePets} />
      <Link href={`/pets/${pet.slug}`}>back</Link>
    </Container>
  );
}
