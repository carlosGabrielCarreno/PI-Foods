import { SET_RECIPES_LOADING } from '../actions/actionsTypes';

const initialState = {
  loading: false,
};

const recipesLoading = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_RECIPES_LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
};

export default recipesLoading;
