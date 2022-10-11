const { accumulationArray } = require('./accumulationArray');
const { getRecipesByApi } = require('./getRecipesByApi');
//this function get 100 recipes:
const getAllRecipesOfApi = async (colletionRecipes, numberPage = 1) => {
  const newRecipes = await getRecipesByApi(numberPage);
  const recipes = newRecipes.map((recipe) => {
    // trabajar con analyzedInstructions...
    return {
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
      healthScore: recipe.healthScore,
      vegetarian: !recipe.vegetarian ? false : true,
      vegan: !recipe.vegan ? false : true,
      glutenFree: !recipe.glutenFree ? false : true,
      summary: recipe.summary,
      diets: recipe.diets ? recipe.diets : null,
      analyzedInstructions: recipe.analyzedInstructions,
    };
  });

  colletionRecipes = accumulationArray(colletionRecipes, recipes);
  numberPage++;
  console.log(colletionRecipes.length);
  return numberPage > 14
    ? colletionRecipes
    : getAllRecipesOfApi(colletionRecipes, numberPage);
};

module.exports = {
  getAllRecipesOfApi,
};
