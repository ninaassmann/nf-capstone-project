import Link from "next/link";
import useSWR from "swr";

export default function BreedList({ dogData }) {
  return (
    <ul>
      {dogData &&
        dogData.map((breed) => (
          <li key={breed.id}>
            <Link href={`/breeds/${breed.slug}`}>{breed.name}</Link>
          </li>
        ))}
    </ul>
  );
}
