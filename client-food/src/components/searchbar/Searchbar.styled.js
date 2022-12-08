import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '../../GlobalStyle.styled';

const ContainerSearchBar = styled.div`
  width: 100%;
  max-width: 360px;
  /* height: 100%; */
  /* border: solid pink; */
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  height: 40px;
  /* @media (min-width: 700px) {
    width: 40%;
  } */
`;

const ContainerSearchInput = styled.div`
  margin: 0;
  border: 1px solid #fcf4e2;
  /* border: solid orange; */
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  height: 100%;
  width: 90%;
  /* color: rgb(248, 181, 37); */
  box-shadow: rgb(248 181 37 / 20%) 0px 3px 15px;
`;
const ContainerSearchIcon = styled.div`
  color: #fcf4e2;
  font-size: 0.5rem;
  padding: 0.2rem 0.4rem 0.2rem 0.2rem;
`;

const SearchInput = styled.input`
  color: #fcf4e2;

  background-color: transparent;
  outline: none;
  border: 0;
  width: 100%;
  font-weight: 300;
  font-size: 0.8rem;

  cursor: pointer;
  ::placeholder {
    padding-left: 1rem;
    /* font-size: 0.8rem; */
    color: #fcf4e2;
  }
`;

const ButtonSearchbar = styled(Button)`
  padding: 10px;
  transition: none;
  height: 100%;
  :hover {
    transform: none;
    border: 0;
    background: linear-gradient(#f8b525, #ffd160);
    color: rgb(24 23 23 / 95%);
  }
`;

export {
  ContainerSearchBar,
  ContainerSearchIcon,
  ContainerSearchInput,
  SearchIcon,
  SearchInput,
  ButtonSearchbar,
};
