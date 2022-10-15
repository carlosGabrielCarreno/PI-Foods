import { SET_RECIPES_LOADING, SET_RECIPES } from './actionsTypes';

export const getRecipes = () => {
  return async (dispatch) => {
    dispatch({ type: SET_RECIPES_LOADING, payload: true });
    const url = 'http://localhost:3001/allRecipes';
    const response = await fetch(url);
    const data = await response.json();
    //console.log('soy data', data);
    dispatch({ type: SET_RECIPES, payload: data });
    dispatch({ type: SET_RECIPES_LOADING, payload: false });
  };
};
