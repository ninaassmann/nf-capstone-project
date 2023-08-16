import Container from "@/components/Container";
import Link from "next/link";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import { calculateAge } from "@/utils/calculateAge";
import Label from "@/components/Label";

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

  const petBreeds = pet.petBreed;

  return (
    <main>
      <Container>
        <Link href="/">back to overview</Link>
        <StyledSection>
          {pet.mixed && <Label>Mixed</Label>}
          <h1>{pet.petName}</h1>
          <p>{pet.petBreed.join(", ")}</p>
          <p>{age}</p>
        </StyledSection>
        {petBreeds.map((petBreed) => {
          const breed =
            dogData && dogData.find((breed) => breed.name === petBreed);

          return (
            <>
              <h2>{petBreed}:</h2>
              <StyledSection>
                <h4>{petBreed} temperament</h4>
                <p>{breed && breed.temperament}</p>
              </StyledSection>
              <StyledSection $isRow>
                <dl>
                  <dt>weight:</dt>
                  <dd>{breed.weight.metric}</dd>
                </dl>
                <dl>
                  <dt>height:</dt>
                  <dd>{breed.height.metric}</dd>
                </dl>
                <dl>
                  <dt>lifespan:</dt>
                  <dd>{breed.life_span}</dd>
                </dl>
              </StyledSection>
            </>
          );
        })}
      </Container>
    </main>
  );
}

const StyledSection = styled.section`
  position: relative;
  width: 100%;
  display: block;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: lightgrey;

  & h1 {
    margin-bottom: 0.5rem;
  }

  & dt {
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  ${({ $isRow }) =>
    $isRow &&
    css`
      display: flex;
      flex-direction: row;
      gap: 1rem;
      background-color: transparent;
      padding: 0;
      & dl {
        width: 100%;
        display: block;
        padding: 1rem;
        border-radius: 0.5rem;
        background-color: lightgrey;
        text-align: center;
      }
    `}
`;
