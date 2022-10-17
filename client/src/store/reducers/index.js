import { combineReducers } from 'redux';
import recipesLoading from './recipesLoading';
import recipes from './recipes';
import detailRecipe from './detailRecipe';

const reducer = combineReducers({ recipesLoading, recipes, detailRecipe });

export default reducer;
