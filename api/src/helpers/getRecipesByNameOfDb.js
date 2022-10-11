const { Recipe, TypeOfDiet } = require('../db');

const getRecipesByNameOfDb = async () => {
  try {
    const recipes = Recipe.findAll({
      attributes: ['id', 'title', 'summary'],
      include: TypeOfDiet,
    });
  } catch (error) {
    return new Error(error);
  }
};

module.exports = { getRecipesByNameOfDb };
