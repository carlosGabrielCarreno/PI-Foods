import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../GlobalStyle.styled';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  gap: 1rem;
  width: 96%;
  border: 1px solid rgb(248, 181, 37);
  border-radius: 0.5rem;
  max-width: 1200px;
  margin: 0.8rem auto;
  padding: 0.5rem;
`;

const ContainerButtons = styled.div`
  /* margin: 1rem 0; */
  /* border: solid red; */
  display: flex;
  justify-content: flex-start;
  height: 5%;
  /* overflow: hidden; */
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  @media (min-width: 700px) {
    justify-content: space-between;
  }
`;

export const ContainerButtonsOrder = styled(ContainerButtons)`
  gap: 0.5rem;
  @media (min-width: 900px) {
    width: 50%;
    justify-content: space-between;
  }
`;

const ButtonState = styled(Link)`
  padding: 10px;
  border: 0;
  backdrop-filter: blur(10px);
  cursor: pointer;
  height: 40px;
  font-weight: 700;
  text-transform: capitalize;
  font-size: 14px;
  border-radius: 0.5rem;
  border: 0;
  background: linear-gradient(to right, #ffd160, #f8b525);
  color: #111110;
  :hover {
    background: linear-gradient(#f8b525, #ffd160);
    color: rgb(24 23 23 / 95%);
  }
`;

export { MainContainer, ButtonState, ContainerButtons };
