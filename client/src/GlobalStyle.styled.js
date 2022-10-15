import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    overflow-wrap: break-word;
    text-decoration: none;
    list-style: none;
    font-family: 'Comfortaa', cursive;
  }
  body{
    background-color: #111110;
  }
`;
