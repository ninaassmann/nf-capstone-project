import { useSession, signIn, signOut } from "next-auth/react";

import Container from "@/components/Container.styled";

export default function Homepage() {
  const { data: session } = useSession();
  return (
    <Container>
      <h1>Welcome {session.user.name}</h1>
    </Container>
  );
}
