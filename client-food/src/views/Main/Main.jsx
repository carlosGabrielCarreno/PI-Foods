import { useDispatch } from 'react-redux';
import { getRecipesByName } from '../../store/actions';
import {
  ButtonAlphabeticOrder,
  ButtonHealthScoreOrder,
  Cards,
  FilteredByTypeOfDiet,
  Navbar,
  Searchbar,
} from '../../components';
import {
  ButtonState,
  ContainerButtons,
  ContainerButtonsOrder,
  MainContainer,
} from './Main.styled';
import { Pagination } from '../../components/pagination/Pagination';

export const Main = () => {
  const dispatch = useDispatch();

  const onSubmitSearching = (event) => {
    event.preventDefault();
    dispatch(getRecipesByName(''));
  };
  return (
    <MainContainer>
      <Navbar />
      <ContainerButtons>
        <Searchbar />
        <ContainerButtonsOrder>
          <ButtonState to="/create">Create</ButtonState>
          <ButtonState onClick={onSubmitSearching}>Reset</ButtonState>
          <ButtonHealthScoreOrder />
          <ButtonAlphabeticOrder />
          <FilteredByTypeOfDiet />
        </ContainerButtonsOrder>
      </ContainerButtons>
      <Pagination />
      <Cards />
    </MainContainer>
  );
};
