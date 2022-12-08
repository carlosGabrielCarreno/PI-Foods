import styled from 'styled-components';
import { Button } from '../../GlobalStyle.styled';
import backgroundImage from '../../image/bghome.jpg';
import backgroundImageFullScreen from '../../image/bkfullscreen.jpg';

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 90vw;
  height: 95vh;
  border: 1px solid #f8b525;
  margin: 0.8rem auto;
  border-radius: 0.5rem;
`;

const ImageBackground = styled.div`
  background: url(${backgroundImage});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  object-fit: cover;
  position: absolute;
  border-radius: 0.5rem;
  @media (min-width: 900px) {
    background: url(${backgroundImageFullScreen});
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    object-fit: cover;
  }
`;

const Filler = styled.div`
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
`;

const ButtonHome = styled(Button)`
  height: 8%;
  padding: 15px 10px;
  border: 0;
  transition: all 600ms;
  backdrop-filter: blur(10px);
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  border-radius: 0.5rem;
  border: 0;
  background: linear-gradient(to right, #ffd160, #f8b525);
  color: #111110;
  :hover {
    color: #f8b525;
    background: transparent;
    border: 1px solid #f8b525;
    transform: scale(1.1);
  }
  @media (min-width: 500px) {
    padding: 20px 15px;
    height: 9%;
    font-size: 16px;
  }
`;

export { HomeContainer, ImageBackground, ButtonHome, Filler };
