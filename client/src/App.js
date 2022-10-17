import { GlobalStyle } from './GlobalStyle.styled';
import { BrowserRouter, Route } from 'react-router-dom';
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
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/allRecipes" exact component={Main} />
        <Route path="/allRecipes/detail" exact component={CardDetail} />
      </BrowserRouter>
    </>
  );
};

export default App;
