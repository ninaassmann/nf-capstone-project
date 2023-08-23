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

  h1,
  h2 {
    margin: 0 0 0.5rem 0;
  }
  p:has(small) {padding-top: 0.5rem;}
`;
