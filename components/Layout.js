import { styled } from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <StyledHeader>
        <ImageWrapper>
          <Image
            src="/pawconnect-logo.png"
            alt="Logo"
            fill={true}
            objectFit="contain"
          />
        </ImageWrapper>
      </StyledHeader>
      <main>{children}</main>
      <StyledFooter>
        <StyledNav>
          <Link href="/">Pets</Link>
          <Link href="/breeds">Breeds</Link>
        </StyledNav>
      </StyledFooter>
    </>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  height: 60px;
  padding: 1rem 0;
  background-color: lightblue;
  text-align: center;
  border-bottom: 2px solid;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-inline: auto;
  height: 100%;
`;

const StyledFooter = styled.footer`
  position: fixed;
  z-index: 10;
  bottom: 0;
  width: 100%;
  height: 80px;
  padding: 1rem 0;
  background-color: lightblue;
  text-align: center;
  border-top: 2px solid;
`;

const StyledNav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & a {
    font-weight: 700;
    text-transform: uppercase;
    padding: 0.25rem;
    text-decoration: none;
    color: black;

    &:hover {
      color: blue;
    }
  }
`;
