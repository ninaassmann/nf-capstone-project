import BackLink from "@/components/BackLink";
import Hero from "@/components/Breeds/Hero";
import Container from "@/components/Container.styled";
import Link from "next/link";

import { useRouter } from "next/router";
import useSWR from "swr";

export default function BreedDetail({ dogBreeds }) {
  const router = useRouter();
  const { slug } = router.query;

  const breed = dogBreeds && dogBreeds.find((breed) => slug === breed.slug);

  const { data, isLoading, error } = useSWR(
    `/api/dogBreeds/${breed && breed.reference_image_id}`
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Container>
      <BackLink link="/breeds" linkText="back to overview" />
      <Hero breed={breed} data={data} />
      <h1>{breed.name}</h1>
      <h3>General Breed Information:</h3>
      {breed.origin && (
        <dl>
          <dt>Origin</dt>
          <dd>{breed.origin}</dd>
        </dl>
      )}

      {breed.bred_for && (
        <dl>
          <dt>Bred for</dt>
          <dd>{breed.bred_for}</dd>
        </dl>
      )}

      {breed.breed_group && (
        <dl>
          <dt>Breed Group</dt>
          <dd>{breed.breed_group}</dd>
        </dl>
      )}

      {breed.temperament && (
        <dl>
          <dt>Temperament</dt>
          <dd>{breed.temperament}</dd>
        </dl>
      )}

      {breed.weight.metric && (
        <dl>
          <dt>Weight</dt>
          <dd>{breed.weight.metric} kg</dd>
        </dl>
      )}

      {breed.height.metric && (
        <dl>
          <dt>Height</dt>
          <dd>{breed.height.metric} cm</dd>
        </dl>
      )}

      {breed.life_span && (
        <dl>
          <dt>Life Span</dt>
          <dd>{breed.life_span} kg</dd>
        </dl>
      )}
    </Container>
  );
}
