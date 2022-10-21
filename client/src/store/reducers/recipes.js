import {
  ADD_RECIPE,
  SET_RECIPES,
  GET_RECIPES_BY_NAME,
  ORDER_ALPHABETICAL,
  ORDER_BY_HEALTH_SCORE,
  FILTERED_TYPE_OF_DIET,
} from '../actions/actionsTypes';

const initialState = {
  allRecipes: [],
  recipesLoaded: [],
};

const recipes = (state = initialState, { type, payload }) => {
  switch (type) {
    case FILTERED_TYPE_OF_DIET:
      return {
        ...state,
        allRecipes: state.recipesLoaded.filter((recipe) => {
          const [typeDiets] = recipe.typeOfDiets;
          if (!typeDiets) return false;
          const { diets } = typeDiets;
          //console.log(diets);
          if (diets.includes(payload)) {
            return true;
          } else {
            return false;
          }
        }),
      };

    case ORDER_BY_HEALTH_SCORE:
      const sortByHealthScore = (recipes) => [
        ...recipes.sort(
          (recipe1, recipe2) => recipe2.healthScore - recipe1.healthScore
        ),
      ];
      let orderByHealthScoreAux;
      if (payload) {
        orderByHealthScoreAux = sortByHealthScore(state.allRecipes);
      } else {
        orderByHealthScoreAux = [...state.recipesLoaded];
      }
      return {
        ...state,
        allRecipes: orderByHealthScoreAux,
      };
    case ORDER_ALPHABETICAL:
      const sortByAlphabet = (recipes, flag = false) => {
        return flag ? recipes.sort().reverse() : recipes.sort();
      };
      return {
        ...state,
        allRecipes: sortByAlphabet(state.allRecipes, payload),
      };
    case SET_RECIPES:
      return {
        ...state,
        allRecipes: [...payload],
        recipesLoaded: [...payload],
      };
    case GET_RECIPES_BY_NAME:
      return {
        ...state,
        allRecipes: payload,
      };
    default:
      return state;
  }
};

export default recipes;
