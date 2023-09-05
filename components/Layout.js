import { styled } from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const path = router.pathname;

  return (
    <>
      {path !== "/pets" && !path.includes("/pets/update/") ? (
        <>
          <StyledHeader>
            <span>PawConnect</span>
          </StyledHeader>
          <main>{children}</main>
          <StyledFooter>
            <StyledNav>
              <Link href="/">Pets</Link>
              <Link href="/breeds">Breeds</Link>
            </StyledNav>
          </StyledFooter>
        </>
      ) : (
        <main>{children}</main>
      )}
    </>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  height: var(--menu-height);
  padding-left: 1rem;
  background: ${({ theme }) => theme.darkBackground};
  display: grid;
  place-items: center start;

  & span {
    font-size: var(--font-big);
    font-weight: 300;
  }
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
