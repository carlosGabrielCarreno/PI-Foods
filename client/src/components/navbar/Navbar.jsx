import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  width: 100%;
  height: 8%;
  /* border: solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled(Link)`
  width: 15px;
  height: 15px;
  color: rgb(255, 209, 96);
`;

const Title = styled.h1`
  color: #fff;
  font-size: 1rem;
  font-weight: 300;
  margin: 0 0.2rem;
`;

const Linea = styled.hr`
  width: 9px;

  /* background-color: #f8b525; */
  margin: 0 0.2rem 0 0;
  border: 0.5px solid #ffd160;
`;

const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1rem;
`;

export const Navbar = () => {
  return (
    <NavContainer>
      <LogoContainer to="/">
        <LocalDiningIcon />
      </LogoContainer>
      <ContainerTitle>
        <Linea />
        <Title>Food App</Title>
        <Linea />
      </ContainerTitle>
    </NavContainer>
  );
};
