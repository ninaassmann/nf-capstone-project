import Image from "next/image";
import { styled } from "styled-components";

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default StyledImage;
