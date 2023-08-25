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
    `https://api.thedogapi.com/v1/images/${breed && breed.reference_image_id}`
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Container>
      <Link href="/breeds">back to overview</Link>
      <Hero breed={breed} data={data} />
      <h2>General Breed Information:</h2>
      <h3>Origin</h3>
      <p>{breed.origin}</p>
      <h3>Bred for</h3>
      <p>{breed.bred_for}</p>
      <h3>Breed Group</h3>
      <p>{breed.breed_group}</p>
      <h3>Temperament</h3>
      <p>{breed.temperament}</p>
      <h3>Weight</h3>
      <p>{breed.weight.metric} kg</p>
      <h3>Height</h3>
      <p>{breed.height.metric} cm</p>
      <h3>Lifespan</h3>
      <p>{breed.life_span}</p>
    </Container>
  );
}
