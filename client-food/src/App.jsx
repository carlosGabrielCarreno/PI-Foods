import { GlobalStyle } from './GlobalStyle.styled';
import { Route, Routes } from 'react-router-dom';
import { Home, Main } from './views';
import './normalize.css';
import { getDiets, getRecipes } from './store/actions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CardDetail, CreateRecipe } from './components';

const loadRecipes = async (dispatch) => {
  await dispatch(getRecipes());
};

const loadTypesOfDiets = async (dispatch) => {
  await dispatch(getDiets());
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadRecipes(dispatch);
  }, []);

  useEffect(() => {
    loadTypesOfDiets(dispatch);
  }, []);

  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Main />} />
        <Route path="/detail/:id" element={<CardDetail />} />
        <Route path="/create" element={<CreateRecipe />} />
      </Routes>
    </>
  );
}

export default App;
