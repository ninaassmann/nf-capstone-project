import { styled } from "styled-components";

export default function LongArrow() {
  return (
    <SVG viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <title />
      <g>
        <path d="M10.1,23a1,1,0,0,0,0-1.41L5.5,17H29.05a1,1,0,0,0,0-2H5.53l4.57-4.57A1,1,0,0,0,8.68,9L2.32,15.37a.9.9,0,0,0,0,1.27L8.68,23A1,1,0,0,0,10.1,23Z" />
      </g>
    </SVG>
  );
}

const SVG = styled.svg`
  width: 1rem;
`;
