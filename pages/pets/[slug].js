import Container from "@/components/Container";
import Link from "next/link";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import { calculateAge } from "@/utils/calculateAge";

export default function Pet({ pets, dogData }) {
  const router = useRouter();
  const { slug } = router.query;

  const pet = pets.find((pet) => slug === pet.slug);

  if (!pet) {
    return (
      <main>
        <Container>
          <h1>page not found</h1>
          <Link href="/">back to overview</Link>
        </Container>
      </main>
    );
  }

  const age = calculateAge(pet.petBirthday);

  const breed = dogData && dogData.find((breed) => breed.name === pet.petBreed);

  return (
    <main>
      <Container>
        <Link href="/">back to overview</Link>
        <StyledSection>
          <h1>{pet.petName}</h1>
          <p>{pet.petBreed}</p>
          <p>{age}</p>
        </StyledSection>
        <h2>{pet.petBreed}:</h2>
        <StyledSection>
          <h4>{pet.petBreed} temperament</h4>
          <p>{breed && breed.temperament}</p>
        </StyledSection>
        <StyledSection $isRow>
          <div>
            <h4>weight:</h4>
            <p>{breed.weight.metric}</p>
          </div>
          <div>
            <h4>height:</h4>
            <p>{breed.height.metric}</p>
          </div>
          <div>
            <h4>lifespan:</h4>
            <p>{breed.life_span}</p>
          </div>
        </StyledSection>
      </Container>
    </main>
  );
}

const StyledSection = styled.section`
  width: 100%;
  display: block;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: lightgrey;

  & h4 {
    margin-bottom: 0.5rem;
  }

  ${({ $isRow }) =>
    $isRow &&
    css`
      display: flex;
      flex-direction: row;
      gap: 1rem;
      background-color: transparent;
      padding: 0;
      & div {
        width: 100%;
        display: block;
        padding: 1rem;
        border-radius: 0.5rem;
        background-color: lightgrey;
        text-align: center;
      }
    `}

  & h1 {
    margin-bottom: 0.5rem;
  }
`;

const test = {
  weight: { imperial: "6 - 13", metric: "3 - 6" },
  height: { imperial: "9 - 11.5", metric: "23 - 29" },
  id: 1,
  name: "Affenpinscher",
  bred_for: "Small rodent hunting, lapdog",
  breed_group: "Toy",
  life_span: "10 - 12 years",
  temperament: "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
  origin: "Germany, France",
  reference_image_id: "BJa4kxc4X",
};
