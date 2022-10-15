import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

const ContainerSearchBar = styled.div`
  width: 100%;
  height: 15%;
  /* border: solid pink; */
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const ContainerSearchInput = styled.div`
  margin: 2rem 0 0 0;
  border: 1px solid #fcf4e2;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  height: 40px;
  width: 100%;
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
    font-size: 0.8rem;
    color: #fcf4e2;
  }
`;

export {
  ContainerSearchBar,
  ContainerSearchIcon,
  ContainerSearchInput,
  SearchIcon,
  SearchInput,
};
