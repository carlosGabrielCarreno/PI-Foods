import styled from 'styled-components';
import { Navbar } from '../../components';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 96vw;
  height: 96vh;
  border: 1px solid #f8b525;
  margin: 0.8rem auto;
  border-radius: 0.5rem;
`;

/* const Filler = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;

  //background-color: #00000066;
  background: linear-gradient(
    180deg,
    rgba(6, 6, 6, 0.475210066936931) 62%,
    rgba(9, 9, 9, 1) 100%
  );
  position: absolute;
`; */

export const Main = () => {
  return (
    <MainContainer>
      <Navbar />
      {/* <Filler /> */}
    </MainContainer>
  );
};
