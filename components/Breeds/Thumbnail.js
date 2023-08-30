import useSWR from "swr";
import StyledImage from "../Image.styled";
import ImageWrapper from "../ImageWrapper.styled";
import { keyframes, styled } from "styled-components";
import { useState } from "react";

export default function Thumbnail({ breed }) {
  const { data, isLoading, error } = useSWR(
    `/api/dogBreeds/${breed && breed.reference_image_id}`
  );
  if (error)
    return (
      <ImageWrapper $variant="thumbnail">
        <div>failed</div>
      </ImageWrapper>
    );
  if (isLoading)
    return (
      <ImageWrapper $variant="thumbnail">
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      </ImageWrapper>
    );

  return (
    <ImageWrapper $variant="thumbnail">
      {data && (
        <StyledImage
          src={data.results.url}
          alt={breed.name}
          width={data.results.width}
          height={data.results.height}
        />
      )}
    </ImageWrapper>
  );
}
const loadingAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg)}
`;

const LoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: lightblue;
  padding: 0.5rem;
  width: 5rem;
  height: 5rem;
`;

const Loader = styled.div`
  border: 8px solid #f3f3f3; /* Light grey */
  border-top: 8px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  animation: ${loadingAnimation} 2s linear infinite;
`;
