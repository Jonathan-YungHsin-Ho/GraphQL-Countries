import { createGlobalStyle } from 'styled-components';
import img from './images/nasa-Q1p7bh3SHj8-unsplash.jpg';

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
    height: 100vh;
    line-height: 1.5;
    font-family: 'Open Sans', sans-serif;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
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

  ::-webkit-scrollbar {
    width: 0.8rem;
  }

  ::-webkit-scrollbar-track {
    border-radius: 0.4rem;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0.4rem;
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
