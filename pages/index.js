import Container from "@/components/Container";
import List from "@/components/List";
import Toast from "@/components/Toast";
import Link from "next/link";
import { styled } from "styled-components";

export default function HomePage({ pets, calculateAge, toast }) {
  return (
    <main>
      <Container>
        <StyledLink href="/pets">Create a new dog</StyledLink>
        <List pets={pets} calculateAge={calculateAge} />

        {toast === true && (
          <Toast text={"Congratulation! You created a new Pet."} />
        )}
      </Container>
    </main>
  );
}

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  background-color: lightblue;
  color: black;
  text-decoration: none;

  &:hover {
    filter: brightness(0.85);
  }
`;
