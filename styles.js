import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
  ::-webkit-scrollbar {display: none}

  main {
    width: min(90vw, 600px);
  margin-inline: auto;
  position: relative;}

  h1,
  h2 {
    margin: 0 0 0.5rem 0;
  }
  p:has(small) {padding: 0.5rem 0;}

  label:has(:checked) {
   background: hsl(107, 65%, 69%);
}
`;
