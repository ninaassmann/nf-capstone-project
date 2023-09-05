import { createGlobalStyle } from "styled-components";
import { Raleway, Roboto } from "@next/font/google";

const raleway = Raleway({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["300", "500"],
  subsets: ["latin"],
});

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    --menu-height: 60px;

    --font-small: 0.75rem;
    --font-regular: 1rem;
    --font-medium: 1.5rem;
    --font-big: 2rem;

    --border-radius: 0.25rem;
  }

  body {
    margin: 0;
    font-family: ${raleway.style.fontFamily};
    font-size: var(--font-regular);
    background: ${({ theme }) => theme.background};
  }

  body * {
    color: ${({ theme }) => theme.text};
  }

  a {text-decoration: none;     display: flex;
    gap: 0.5rem;
    align-items: center;}

  ::-webkit-scrollbar {display: none}

  main {
  width: min(calc(100vw - 2rem), 600px);
  margin-inline: auto;
  position: relative;}

  h1, h2, h3, h4, h5 {
    font-family: ${roboto.style.fontFamily};
    font-weight: 300;
    font-size: var(--font-medium);
  }

  h1,
  h2 {
    margin: 0 0 0.5rem 0;
    font-size: var(--font-big);
  }
  
  p:has(small) {padding: 0.5rem 0;}

  label:has(:checked) {
   background: ${({ theme }) => theme.primary};
   color: #eff1f5;
  }
  
  dt {
    margin-bottom: 0.5rem;
    font-weight: 700;
  }
`;
