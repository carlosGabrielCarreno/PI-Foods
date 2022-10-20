import axios from 'axios';
import {
  SET_RECIPES_LOADING,
  SET_RECIPES,
  GET_DIETS,
  GET_DETAIL_RECIPE,
} from './actionsTypes';

export const getRecipes = () => {
  return async (dispatch) => {
    dispatch({ type: SET_RECIPES_LOADING, payload: true });
    const url = 'http://localhost:3001/allRecipes';
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: SET_RECIPES, payload: data });
    dispatch({ type: SET_RECIPES_LOADING, payload: false });
  };
};

export const getDiets = () => {
  return async (dispatch) => {
    const url = 'http://localhost:3001/recipes/diets';
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: GET_DIETS, payload: data });
  };
};

export const getDetailRecipe = (id) => {
  return async (dispatch) => {
    dispatch({ type: SET_RECIPES_LOADING, payload: true });
    const url = `http://localhost:3001/${id}`;
    const { data } = await axios.get(url);
    dispatch({ type: GET_DETAIL_RECIPE, payload: data });
    dispatch({ type: SET_RECIPES_LOADING, payload: false });
  };
};

export const createRecipe = (payload) => {
  return async (dispatch) => {
    await axios.post('http://localhost:3001/create', payload);
  };
};
