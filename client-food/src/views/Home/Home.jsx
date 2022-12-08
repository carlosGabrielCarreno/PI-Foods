//styles
import {
  HomeContainer,
  ImageBackground,
  Filler,
  ButtonHome,
} from './Home.styled.js';

export const Home = () => {
  return (
    <HomeContainer>
      <ImageBackground />
      <Filler />
      <ButtonHome to="/recipes">Get Started</ButtonHome>
    </HomeContainer>
  );
};
