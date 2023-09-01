import { styled } from "styled-components";
import Section from "./Section.styled";

export default function BreedInfoSection({ petBreeds, dogBreeds }) {
  const matchingBreeds = dogBreeds.filter((breed) =>
    petBreeds.includes(breed.name)
  );
  return (
    <ul>
      {matchingBreeds.map((breed) => (
        <ListItem key={breed.id}>
          <h2>{breed.name}:</h2>
          <Section>
            <h4>{breed.name} temperament</h4>
            <p>{breed.temperament}</p>
          </Section>
          <Section $isRow>
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
          </Section>
        </ListItem>
      ))}
    </ul>
  );
}

const ListItem = styled.li`
  all: unset;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
  & h2 {
    margin: 0;
  }
`;
