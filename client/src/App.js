import { GlobalStyle } from './GlobalStyle.styled';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home, Main } from './views';
import './normalize.css';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/allRecipes" exact component={Main} />
      </BrowserRouter>
    </>
  );
};

export default App;
