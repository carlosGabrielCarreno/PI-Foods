import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  width: 100%;
  height: 12%;
  border: solid red;
  display: flex;
  justify-content: space-between;
`;

const LogoContainer = styled(Link)`
  width: 15px;
  height: 15px;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 1.5rem;
`;

export const Navbar = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <LocalDiningIcon />
      </LogoContainer>
      <Title>Food App</Title>
    </NavContainer>
  );
};
