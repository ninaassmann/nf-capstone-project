import { styled } from "styled-components";

export default function Logout() {
  return (
    <SVG viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
      <title />
      <g>
        <path d="M20.4844,54H66a6,6,0,0,0,0-12H20.4844l7.7578-7.7578a5.9994,5.9994,0,0,0-8.4844-8.4844l-18,18a5.9979,5.9979,0,0,0,0,8.4844l18,18a5.9994,5.9994,0,1,0,8.4844-8.4844Z" />
        <path d="M90,0H42a5.9966,5.9966,0,0,0-6,6V18a6,6,0,0,0,12,0V12H84V84H48V78a6,6,0,0,0-12,0V90a5.9966,5.9966,0,0,0,6,6H90a5.9966,5.9966,0,0,0,6-6V6A5.9966,5.9966,0,0,0,90,0Z" />
      </g>
    </SVG>
  );
}

const SVG = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
  fill: ${({ theme }) => theme.text};
`;
