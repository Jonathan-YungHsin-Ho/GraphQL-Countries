import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-width: 100%;
  }

  html {
    font-size: 62.5%
  }

  body {
    line-height: 1.5;
    font-family: 'Open Sans', sans-serif;
  }

  h1 {
    font-size: 2.4rem;
  }

  h2 {
    font-size: 1.6rem;
  }

  p, li {
    font-size: 1.4rem;
  }
`;
