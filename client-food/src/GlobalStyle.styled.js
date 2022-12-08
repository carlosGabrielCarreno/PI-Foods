import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const Button = styled(Link)`
  padding: 15px 10px;
  border: 0;
  transition: all 600ms;
  backdrop-filter: blur(10px);
  cursor: pointer;
  height: inherit;
  font-weight: 600;
  font-size: 14px;
  border-radius: 0.5rem;
  border: 0;
  background: linear-gradient(to right, #ffd160, #f8b525);
  color: #111110;
  :hover {
    color: #f8b525;
    background: transparent;
    border: 1px solid #f8b525;
    transform: scale(1.1);
  }
  /* @media (min-width: 500px) {
    padding: 20px 15px;
    font-size: 16px;
  } */
`;
