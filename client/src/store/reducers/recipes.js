import { SET_RECIPES } from '../actions/actionsTypes';

const initialState = {
  allRecipes: [],
};

const recipes = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_RECIPES:
      return {
        ...state,
        allRecipes: state.allRecipespayload.concat(payload),
      };
    default:
      return state;
  }
};

export default recipes;
