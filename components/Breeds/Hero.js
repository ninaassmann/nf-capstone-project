import Image from "next/image";
import { styled } from "styled-components";

export default function Hero({ breed, data }) {
  if (!data) return <p>is loading</p>;
  return (
    <ImageWrapper>
      <StyledImage
        src={data.results.url}
        alt={breed.name}
        width={data.results.width}
        height={data.results.height}
      />
      <h1>{breed.name}</h1>
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 18rem;
  border-radius: 0.25rem;
  overflow: hidden;

  & h1 {
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 0;
    padding: 1rem;
    background-color: hsla(0, 0%, 100%, 0.75);
    color: black;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  background: lightblue;
  object-fit: cover;
`;
