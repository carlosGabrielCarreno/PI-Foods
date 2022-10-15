import styled from 'styled-components';
import { Card } from '../index';

const ContainerCards = styled.div`
  border: solid red;
  width: 100%;
  height: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Cards = () => {
  return (
    <ContainerCards>
      <Card />
    </ContainerCards>
  );
};
