//styles
import {
  HomeContainer,
  ImageBackground,
  Filler,
  Button,
} from './Home.styled.js';

export const Home = () => {
  return (
    <HomeContainer>
      <ImageBackground />
      <Filler />
      <Button to="/recipes">Get Started</Button>
    </HomeContainer>
  );
};
