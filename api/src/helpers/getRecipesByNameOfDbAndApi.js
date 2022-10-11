const { getAllRecipesOfApi } = require('./getAllRecipesOfApi');
const { data } = require('./data');

const getRecipesByNameOfDbAndApi = async (name) => {
  //const data = await getAllRecipesOfApi();

  return data;
};

module.exports = {
  getRecipesByNameOfDbAndApi,
};
