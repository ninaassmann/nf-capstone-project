import Image from "next/image";
import { styled } from "styled-components";
import StyledImage from "../Image.styled";
import ImageWrapper from "../ImageWrapper.styled";

export default function Hero({ breed, data }) {
  if (!data) return <p>is loading</p>;
  return (
    <ImageWrapper $variant="hero">
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
