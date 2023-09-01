import Section from "./Section.styled";

export default function BreedInfoSection({ petBreeds, dogBreeds }) {
  return (
    <>
      {petBreeds?.map((petBreed) => {
        const dataBreed =
          dogBreeds && dogBreeds.find((breed) => breed.name === petBreed);
        if (dataBreed) {
          return (
            <>
              <h2>{petBreed}:</h2>
              <Section>
                <h4>{petBreed} temperament</h4>
                <p>{dataBreed.temperament}</p>
              </Section>
              <Section $isRow>
                <dl>
                  <dt>weight:</dt>
                  <dd>{dataBreed.weight.metric}</dd>
                </dl>
                <dl>
                  <dt>height:</dt>
                  <dd>{dataBreed.height.metric}</dd>
                </dl>
                <dl>
                  <dt>lifespan:</dt>
                  <dd>{dataBreed.life_span}</dd>
                </dl>
              </Section>
            </>
          );
        }
      })}
    </>
  );
}
