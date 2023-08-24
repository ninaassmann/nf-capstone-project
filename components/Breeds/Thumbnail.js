import Image from "next/image";
import { styled } from "styled-components";
import useSWR from "swr";

export default function Thumbnail({ breed }) {
  const { data, isLoading, error } = useSWR(
    `https://api.thedogapi.com/v1/images/${breed.reference_image_id}`
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <ImageWrapper>
      <StyledImage src={data.url} alt={breed.name} fill={true} />
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
`;
