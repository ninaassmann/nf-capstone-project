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
    --sky: hsla(225, 87%, 65%, 1);
    --danger: hsla(346, 80%, 62%, 1);
    --success: hsla(104, 50%, 44%, 1);
    --blue-grey: hsla(225, 25%, 85%, 1);
    --dark-blue-grey: hsla(225, 30%, 24%, 1);

    --black-blue: hsla(225, 60%, 6%, 1);
    --dark-blue: hsla(227, 53%, 9%, 1);
    
    --blue: hsla(225, 53%, 17%, 1);
    --white: hsla(0, 0%, 100%, 1);
    --light-blue-grey: hsla(225, 25%, 95%, 1);

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
    background: var(--light-blue-grey);
  }

  body * {
    color: var(--dark-blue);
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
   background: hsl(107, 65%, 69%);
}
`;
