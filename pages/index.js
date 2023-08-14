import Container from "@/components/Container";
import List from "@/components/List";
import Link from "next/link";
import { styled } from "styled-components";

export default function HomePage({ pets }) {
  return (
    <main>
      <Container>
        <StyledLink href="/pets">New Dog Profile</StyledLink>
        <List pets={pets} />
      </Container>
    </main>
  );
}

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 1rem;
  background-color: lightblue;
  color: black;
  text-decoration: none;

  &:hover {
    filter: brightness(0.85);
  }
`;
