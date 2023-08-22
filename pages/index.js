import Container from "@/components/Container";
import List from "@/components/List";
import Link from "next/link";
import { styled } from "styled-components";

export default function HomePage({ pets, calculateAge, toastState }) {
  return (
    <main>
      <Container>
        <StyledLink href="/pets">Create a new dog</StyledLink>
        <List pets={pets} calculateAge={calculateAge} />
        {toastState && (
          <Toast>
            <h4>That worked</h4>
          </Toast>
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

const Toast = styled.div`
  position: fixed;
  bottom: 1rem;
  margin: 1rem;
  background: green;
  padding: 1rem;
`;
