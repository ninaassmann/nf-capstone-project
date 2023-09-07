import Button from "@/components/Button";
import Container from "@/components/Container.styled";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();

  return (
    <Container>
      <section>
        {
          // check if we have session data (= user is already signed in => display a logout button)
          session ? (
            <>
              <Button onClick={signOut} buttonText="Logout" />
              <p>Signed in as {session.user.email}</p>
            </>
          ) : (
            // no session data available yet, display a login button
            <Button
              onClick={() => {
                signIn();
              }}
              buttonText="Login"
            />
          )
        }
      </section>
    </Container>
  );
}
