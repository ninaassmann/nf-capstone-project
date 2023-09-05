const { default: Link } = require("next/link");
const { styled } = require("styled-components");

const LinkButton = styled(Link)`
  display: block;
  cursor: pointer;
  width: 100%;
  padding: 1rem;
  border-radius: var(--border-radius);
  border: none;
  background-color: var(--blue-grey);
  text-align: center;
  &:hover {
    filter: brightness(0.95);
  }
`;

export default LinkButton;
