import { GET_DIETS } from '../actions/actionsTypes';

const initialState = {
  diets: [],
};

const diets = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DIETS:
      return {
        ...state,
        diets: state.diets.concat(payload),
      };
    default:
      return state;
  }
};

export default diets;
