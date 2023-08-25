import css from "styled-jsx/css";

const { default: Link } = require("next/link");
const { styled } = require("styled-components");

const listVariants = {
  breed: css`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
  `,
};

const StyledLink = styled(Link)`
  position: relative;
  display: block;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: lightgray;
  color: black;
  text-decoration: none;

  &:hover {
    filter: brightness(0.85);
  }

  ${({ $variant }) => listVariants[$variant] || ""};
`;

export default StyledLink;
