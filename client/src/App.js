import { GlobalStyle } from './GlobalStyle.styled';
import { Route, Routes } from 'react-router-dom';
import { Home, Main } from './views';
import './normalize.css';
import { getDiets, getRecipes } from './store/actions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CardDetail } from './components';

const load = async (dispatch) => {
  await dispatch(getRecipes());
  await dispatch(getDiets());
};

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    load(dispatch);
  }, []);

  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Main />} />
        <Route path="/detail/:id" element={<CardDetail />} />
      </Routes>
    </>
  );
};

export default App;
