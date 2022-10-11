const { getAllRecipesOfApi } = require('./getAllRecipesOfApi');

const getRecipesByNameOfDbAndApi = async (name) => {
  const data = await getAllRecipesOfApi();
  return data;
};

module.exports = {
  getRecipesByNameOfDbAndApi,
};
