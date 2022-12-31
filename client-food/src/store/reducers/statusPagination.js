import { SET_PAGE_ACTIVE } from '../actions/actionsTypes';

const initialState = {
  pageActive: 1,
};

export const statusPagination = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PAGE_ACTIVE:
      console.log('hola');
      return {
        ...state,
        pageActive: payload,
      };

    default:
      return state;
  }
};
