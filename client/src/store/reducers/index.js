import { combineReducers } from 'redux';
import recipesLoading from './recipesLoading';
import recipes from './recipes';

const reducer = combineReducers({ recipesLoading, recipes });

export default reducer;
