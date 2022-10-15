import { SET_RECIPES } from '../actions/actionsTypes';

const initialState = {
  allRecipes: [],
  recipesLoaded: [],
};

const recipes = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_RECIPES:
      console.log('soy state', state.allRecipes.concat(payload));
      return {
        ...state,
        allRecipes: state.allRecipes.concat(payload),
        recipesLoaded: state.recipesLoaded.concat(payload),
      };
    default:
      return state;
  }
};

export default recipes;
