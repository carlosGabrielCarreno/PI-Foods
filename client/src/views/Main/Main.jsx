import styled from 'styled-components';
import { Cards, Navbar, Searchbar } from '../../components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  width: 96vw;
  height: 96vh;
  border: 1px solid #f8b525;
  margin: 0.8rem auto;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export const Main = () => {
  return (
    <MainContainer>
      <Navbar />
      <Searchbar />
      <Cards />
    </MainContainer>
  );
};
