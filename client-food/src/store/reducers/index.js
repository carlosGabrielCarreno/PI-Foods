import { combineReducers } from 'redux';
import recipesLoading from './recipesLoading';
import recipes from './recipes';
import detailRecipe from './detailRecipe';
import diets from './diets';

const reducer = combineReducers({
  recipesLoading,
  recipes,
  detailRecipe,
  diets,
});

export default reducer;
