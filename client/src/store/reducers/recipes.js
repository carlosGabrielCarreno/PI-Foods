import { SET_RECIPES } from '../actions/actionsTypes';

const initialState = {
  recipes: [],
};

const recipes = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_RECIPES:
      return {
        ...state,
        recipes: [...state.recipes, payload],
      };
    default:
      return state;
  }
};

export default recipes;
