import { useRouter } from "next/router";

export default function BreedDetail({ dogData }) {
  const router = useRouter();
  const { slug } = router.query;

  const breed = dogData && dogData.find((breed) => slug === breed.slug);

  return <h1>{breed.name}</h1>;
}
