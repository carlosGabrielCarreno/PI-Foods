const { Recipe, TypeOfDiet } = require('../db');

const getRecipesByNameOfDb = async (name) => {
  const recipes = await Recipe.findAll({});

  return data;
};

module.exports = {
  getRecipesByNameOfDb,
};
