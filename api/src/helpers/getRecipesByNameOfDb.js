const { Recipe, TypeOfDiet } = require('../db');
const { getAllRecipesOfApi } = require('./getAllRecipesOfApi');
const { getRecipesOfDb } = require('./getRecipesOfDb');

const getRecipesByNameOfDb = async (name) => {
  const recipes = await getRecipesOfDb();
  return recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(name.toLowerCase())
  );
};

module.exports = {
  getRecipesByNameOfDb,
};
