import { ADD_RECIPE, SET_RECIPES } from '../actions/actionsTypes';

const initialState = {
  allRecipes: [],
  recipesLoaded: [],
};

const recipes = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_RECIPES:
      return {
        ...state,
        allRecipes: [...payload],
        recipesLoaded: [...payload],
      };
    default:
      return state;
  }
};

export default recipes;
