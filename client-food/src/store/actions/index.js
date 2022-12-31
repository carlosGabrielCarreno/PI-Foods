import axios from 'axios';
import {
  SET_RECIPES_LOADING,
  SET_RECIPES,
  GET_DIETS,
  GET_DETAIL_RECIPE,
  GET_RECIPES_BY_NAME,
  ORDER_ALPHABETICAL,
  ORDER_BY_HEALTH_SCORE,
  FILTERED_TYPE_OF_DIET,
  SET_CURRENT_PAGE_RECIPES,
  SET_PAGE_ACTIVE,
} from './actionsTypes';

export const getRecipes = () => {
  return async (dispatch) => {
    dispatch({ type: SET_RECIPES_LOADING, payload: true });
    const url = '/allRecipes';
    const { data } = await axios.get(url);
    dispatch({ type: SET_RECIPES, payload: data });
    dispatch({ type: SET_RECIPES_LOADING, payload: false });
  };
};

export const getDiets = () => {
  return async (dispatch) => {
    const url = '/recipes/diets';
    const { data } = await axios.get(url);
    dispatch({ type: GET_DIETS, payload: data });
  };
};

export const getDetailRecipe = (id) => {
  return async (dispatch) => {
    dispatch({ type: SET_RECIPES_LOADING, payload: true });
    const url = `/${id}`;
    const { data } = await axios.get(url);
    dispatch({ type: GET_DETAIL_RECIPE, payload: data });
    dispatch({ type: SET_RECIPES_LOADING, payload: false });
  };
};

export const createRecipe = (payload) => {
  return async () => {
    await axios.post('/create', payload);
  };
};
//
export const getRecipesByName = (name) => {
  return async (dispatch) => {
    dispatch({ type: SET_RECIPES_LOADING, payload: true });
    const url = `/recipe?name=${name}`;
    const { data } = await axios.get(url);
    dispatch({ type: GET_RECIPES_BY_NAME, payload: data });
    dispatch({ type: SET_RECIPES_LOADING, payload: false });
  };
};
//
export const orderByAlphabetRecipes = (flag) => {
  return { type: ORDER_ALPHABETICAL, payload: flag };
};

export const orderRecipesByHealthScore = (flag) => {
  return { type: ORDER_BY_HEALTH_SCORE, payload: flag };
};

export const filteredByTypeOfDiet = (type) => {
  return { type: FILTERED_TYPE_OF_DIET, payload: type };
};

export const setRecipesPerPage = (currentPage) => {
  return async (dispatch) => {
    if (currentPage) {
      await dispatch({ type: SET_RECIPES_LOADING, payload: true });
      await dispatch({ type: SET_CURRENT_PAGE_RECIPES, payload: currentPage });
      await dispatch({ type: SET_RECIPES_LOADING, payload: false });
    }
  };
};

export const setNumberPageActive = (pageActive) => {
  console.log('soy action creator', pageActive);
  return { type: SET_PAGE_ACTIVE, payload: pageActive };
};
