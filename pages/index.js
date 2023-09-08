import { useSession } from "next-auth/react";

import Container from "@/components/Container.styled";
import LinkButton from "@/components/LinkButton.styled";

export default function Homepage() {
  const { data: session } = useSession();
  return (
    <Container>
      <h1>Welcome {session.user.name}</h1>
      <LinkButton href="/pets">My pets</LinkButton>
    </Container>
  );
}
