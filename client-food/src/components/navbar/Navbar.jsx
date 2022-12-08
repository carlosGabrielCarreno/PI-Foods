import LocalDiningIcon from '@mui/icons-material/LocalDining';
import {
  ContainerTitle,
  Line,
  LogoContainer,
  NavContainer,
  Title,
} from './Navbar.styled';

export const Navbar = () => {
  return (
    <NavContainer>
      <LogoContainer to="/">
        <LocalDiningIcon />
      </LogoContainer>
      <ContainerTitle>
        <Line />
        <Title>Food App</Title>
        <Line />
      </ContainerTitle>
    </NavContainer>
  );
};
