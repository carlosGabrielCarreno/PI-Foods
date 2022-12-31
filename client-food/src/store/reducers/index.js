import { combineReducers } from 'redux';
import recipesLoading from './recipesLoading';
import recipes from './recipes';
import detailRecipe from './detailRecipe';
import diets from './diets';
import { statusPagination } from './statusPagination';

const reducer = combineReducers({
  recipesLoading,
  recipes,
  detailRecipe,
  diets,
  statusPagination,
});

export default reducer;
