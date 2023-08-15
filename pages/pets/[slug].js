import Container from "@/components/Container";
import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "styled-components";

export default function Pet({ pets, calculateAge }) {
  const router = useRouter();
  const { slug } = router.query;

  const pet = pets.find((pet) => slug === pet.slug);
  const age = calculateAge(pet.petBirthday);

  return (
    <main>
      <Container>
        <Link href="/">back to overview</Link>
        <StledHeadline>{pet.petName}</StledHeadline>
        <p>{pet.petBreed}</p>
        <p>{age}</p>
      </Container>
    </main>
  );
}

const StledHeadline = styled.h1`
  margin-top: 2rem;
`;
