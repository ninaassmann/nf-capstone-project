import { styled } from "styled-components";
import Section from "./Section.styled";

export default function BreedInfoSection({ petBreeds, dogBreeds }) {
  const matchingBreeds = dogBreeds?.filter((breed) =>
    petBreeds.includes(breed.name)
  );
  return (
    <StyledList>
      {matchingBreeds?.map((breed) => (
        <ListItem key={breed.id}>
          <h2>{breed.name}</h2>
          <Section>
            <dl>
              <dt>{breed.name} temperament:</dt>
              <dd>{breed.temperament}</dd>
            </dl>
          </Section>
          <Section $isRow>
            <dl>
              <dt>weight:</dt>
              <dd>
                {breed.weight.metric} <br />
                kg
              </dd>
            </dl>
            <dl>
              <dt>height:</dt>
              <dd>
                {breed.height.metric} <br />
                cm
              </dd>
            </dl>
            <dl>
              <dt>lifespan:</dt>
              <dd>{breed.life_span}</dd>
            </dl>
          </Section>
        </ListItem>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  width: 100%;
`;

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
