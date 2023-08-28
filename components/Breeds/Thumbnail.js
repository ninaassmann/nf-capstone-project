import Image from "next/image";
import { styled } from "styled-components";
import useSWR from "swr";

export default function Thumbnail({ breed }) {
  const { data, isLoading, error } = useSWR(
    `/api/dogBreeds/${breed.reference_image_id}`
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(process.env.API_KEY);
  return (
    <ImageWrapper>
      <StyledImage
        src={data.results.url}
        alt={breed.name}
        width={data.results.width}
        height={data.results.height}
      />
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  position: relative;
  width: 5rem;
  height: 5rem;
  border-radius: 0.25rem;
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  aspect-ratio: 1 / 1;
  background: lightblue;
  width: 100%;
  height: 100%;
`;
