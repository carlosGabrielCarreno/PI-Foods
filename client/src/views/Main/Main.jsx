import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  const { allRecipes } = useSelector((state) => state.recipes);

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
