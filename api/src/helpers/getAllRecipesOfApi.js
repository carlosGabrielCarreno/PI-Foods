const { getRecipesByApi } = require('./getRecipesByApi');

const getAllRecipesOfApi = async (colletionRecipes, numberPage = 1) => {
  const recipes = await getRecipesByApi(numberPage);

  return;
};

module.exports = {
  getAllRecipesOfApi,
};
