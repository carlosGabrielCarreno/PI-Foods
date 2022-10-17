import { GET_DETAIL_RECIPE } from '../actions/actionsTypes';

const initialState = {
  recipe: {},
};

const detailRecipe = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DETAIL_RECIPE:
      return {
        ...state,
        recipe: payload,
      };
    default:
      return state;
  }
};

export default detailRecipe;
