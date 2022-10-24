import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipes, getRecipesByName } from '../../store/actions';
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

const loadRecipes = async (dispatch) => {
  await dispatch(getRecipes());
};

export const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    loadRecipes(dispatch);
  }, []);

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
      <Cards />
    </MainContainer>
  );
};
