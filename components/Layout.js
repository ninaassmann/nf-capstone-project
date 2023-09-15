import { useSession, signIn, signOut } from "next-auth/react";

import { styled } from "styled-components";
import { useRouter } from "next/router";

import Link from "next/link";
import Sun from "./icons/Sun";
import Moon from "./icons/Moon";
import Button from "./Button";
import Logout from "./icons/Logout";
import Container from "./Container.styled";

export default function Layout({ children, theme, toggleTheme }) {
  const router = useRouter();
  const path = router.pathname;

  const { data: session } = useSession();

  return (
    <>
      {
        // check if we have session data (= user is already signed in => display a logout button)
        session ? (
          <>
            {path !== "/pets/create" && !path.includes("/pets/update/") ? (
              <>
                <StyledHeader>
                  <Logo>PawConnect</Logo>
                  <div>
                    <IconButton onClick={toggleTheme} aria-label="Toggle theme">
                      {theme === "light" ? <Moon /> : <Sun />}
                    </IconButton>
                    <IconButton onClick={signOut}>
                      <Logout />
                    </IconButton>
                  </div>
                </StyledHeader>
                <main>{children}</main>
                <StyledFooter>
                  <StyledNav>
                    <Link href="/">Home</Link>
                    <Link href="/pets">Pets</Link>
                    <Link href="/breeds">Breeds</Link>
                  </StyledNav>
                </StyledFooter>
              </>
            ) : (
              <main>{children}</main>
            )}
          </>
        ) : (
          // no session data available yet, display a login button
          <StyledContainer>
            <StyledWrapper>
              <Logo>PawConnect</Logo>
              <small>Manage all your pets at one place</small>
              <Button
                onClick={() => {
                  signIn("google", {
                    callbackUrl:
                      "https://pawconnect.vercel.app",
                  });
                }}
                buttonText="Login with Google"
                $variant="primary"
              />
            </StyledWrapper>
          </StyledContainer>
        )
      }
    </>
  );
}

const StyledContainer = styled(Container)`
  height: 100vh;
  width: min(100vw, 800px);
  margin-inline: auto;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 50, 0.15),
      rgba(0, 0, 50, 0.85)
    ),
    url("/puppybackground.jpg");
  background-size: 175%;
  background-position: center;
`;

const StyledWrapper = styled.div`
  width: min(calc(100vw - 4rem), 736px);
  margin-inline: auto;
  position: absolute;
  bottom: 10rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  background: ${({ theme }) => theme.darkBackground};

  & small {
    margin-bottom: 2rem;
  }
`;

const StyledHeader = styled.header`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  height: var(--menu-height);
  padding: 0 1rem;
  background: ${({ theme }) => theme.darkBackground};
  display: flex;
  justify-content: space-between;
  align-items: center;
  & div {
    display: flex;
    gap: 2rem;
  }
`;

const Logo = styled.span`
  font-size: var(--font-big);
  font-weight: 300;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-inline: auto;
  height: calc(60px - 2rem);
`;

const StyledFooter = styled.footer`
  position: fixed;
  z-index: 10;
  bottom: 0;
  width: 100%;
  height: var(--menu-height);
  padding: 1rem 0;
  background: ${({ theme }) => theme.darkBackground};
  text-align: center;
`;

const StyledNav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & a {
    text-transform: uppercase;
    padding: 0.25rem;
    text-decoration: none;
    font-size: var(--font-medium);
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
`;
