import {
  SET_CURRENT_PAGE_RECIPES,
  SET_RECIPES,
  GET_RECIPES_BY_NAME,
  ORDER_ALPHABETICAL,
  ORDER_BY_HEALTH_SCORE,
  FILTERED_TYPE_OF_DIET,
} from '../actions/actionsTypes';

const initialState = {
  allRecipes: [],
  recipesLoaded: [],
  currentRecipes: [],
  currentPage: 1,
  recipesPerPage: 9,
  indexLastRecipe: 9,
  indexFirstRecipe: 0,
};

const recipes = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_PAGE_RECIPES:
      state.currentPage = payload;
      state.indexLastRecipe = state.currentPage * state.recipesPerPage;
      state.indexFirstRecipe = state.indexLastRecipe - state.recipesPerPage;
      return {
        ...state,
        currentRecipes: state.allRecipes.slice(
          state.indexFirstRecipe,
          state.indexLastRecipe
        ),
      };
    case FILTERED_TYPE_OF_DIET:
      state.allRecipes = state.recipesLoaded.filter((recipe) => {
        const [typeDiets] = recipe.typeOfDiets;
        if (!typeDiets) return false;
        const { diets } = typeDiets;
        if (diets.includes(payload)) {
          return true;
        } else {
          return false;
        }
      });
      return {
        ...state,
        currentPage: 1,
        indexLastRecipe: 9,
        indexFirstRecipe: 0,
        currentRecipes: state.allRecipes.slice(0, 9),
      };

    case ORDER_BY_HEALTH_SCORE:
      const sortByHealthScore = (recipes, flag = true) => [
        ...recipes.sort((recipe1, recipe2) =>
          flag
            ? recipe2.healthScore - recipe1.healthScore
            : recipe1.healthScore - recipe2.healthScore
        ),
      ];
      let orderByHealthScoreAux;
      if (payload) {
        orderByHealthScoreAux = sortByHealthScore(state.allRecipes);
      } else {
        orderByHealthScoreAux = sortByHealthScore(state.allRecipes, false);
      }
      return {
        ...state,
        allRecipes: orderByHealthScoreAux,
        currentPage: 1,
        indexLastRecipe: 9,
        indexFirstRecipe: 0,
        currentRecipes: orderByHealthScoreAux.slice(0, 9),
      };
    case ORDER_ALPHABETICAL:
      const sortByAlphabet = (recipes, flag = false) => {
        return flag ? recipes.sort().reverse() : recipes.sort();
      };
      state.allRecipes = sortByAlphabet(state.allRecipes, payload);
      return {
        ...state,
        currentPage: 1,
        indexLastRecipe: 9,
        indexFirstRecipe: 0,
        currentRecipes: state.allRecipes.slice(0, 9),
      };
    case SET_RECIPES:
      return {
        ...state,
        allRecipes: [...payload],
        recipesLoaded: [...payload],
        currentRecipes: [...payload].slice(
          state.indexFirstRecipe,
          state.indexLastRecipe
        ),
      };
    case GET_RECIPES_BY_NAME:
      return {
        ...state,
        allRecipes: payload,
        currentPage: 1,
        indexLastRecipe: 9,
        indexFirstRecipe: 0,
        currentRecipes: payload.slice(0, 9),
      };
    default:
      return state;
  }
};

export default recipes;
