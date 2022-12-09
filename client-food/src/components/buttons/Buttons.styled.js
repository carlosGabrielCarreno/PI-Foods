import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../GlobalStyle.styled';

export const ButtonOrder = styled(Link)`
  padding: 10px;
  border: 0;
  backdrop-filter: blur(10px);
  cursor: pointer;
  height: 40px;
  font-weight: 700;
  text-transform: capitalize;
  font-size: 15px;
  border-radius: 0.5rem;
  border: 0;
  background: linear-gradient(to right, #ffd160, #f8b525);
  color: #111110;
  :hover {
    background: linear-gradient(#f8b525, #ffd160);
    color: rgb(24 23 23 / 95%);
  }
`;
