import { createGlobalStyle } from 'styled-components';
import { backgroundColor, white } from './colorProvider';

export const GlobalStyle = createGlobalStyle`
  html{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    max-width: 100% !important;
  }
  body {
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
    padding: 0;
    margin: 0;
    height: 100%;
    box-sizing: border-box;
    background-color: ${backgroundColor};
    color: ${white};
    max-width: 100% !important;
  }

`;
