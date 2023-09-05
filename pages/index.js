import Container from "@/components/Container.styled";
import List from "@/components/List";
import Toast from "@/components/Toast";
import Link from "next/link";
import { styled } from "styled-components";

export default function HomePage({ pets, calculateAge, toast }) {
  return (
    <Container>
      <StyledLink href="/pets" aria-label="Add another pet">
        +
      </StyledLink>
      <List pets={pets} calculateAge={calculateAge} />

      {toast === true && (
        <Toast text={"Congratulation! You created a new Pet."} />
      )}
    </Container>
  );
}

const StyledLink = styled(Link)`
  width: 100%;
  height: var(--menu-height);
  border: 1px dashed;
  border-radius: var(--border-radius);
  text-decoration: none;
  display: grid;
  place-items: center;
  font-size: var(--font-big);
  font-weight: 300;
`;
