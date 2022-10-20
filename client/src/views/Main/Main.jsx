import { useSelect } from '@mui/base';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Cards, Navbar, Searchbar } from '../../components';
import { BtnAlphabeticalOrder } from '../../components/buttons/BtnAlphabeticalOrder';
import { getRecipes, getRecipesByName } from '../../store/actions';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 96vw;
  height: 100%;
  border: 1px solid rgb(248, 181, 37);
  margin: 0.8rem auto;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

const loadRecipes = async (dispatch) => {
  await dispatch(getRecipes());
};

export const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    loadRecipes(dispatch);
  }, []);

  const onSubmitSearching = (e) => {
    e.preventDefault();
    dispatch(getRecipesByName(''));
  };

  return (
    <MainContainer>
      <Navbar />
      <Searchbar />
      <BtnAlphabeticalOrder />
      <button onClick={onSubmitSearching}>reset</button>
      <button onClick={() => navigate('/create')}>create recipe</button>
      <Cards />
    </MainContainer>
  );
};
