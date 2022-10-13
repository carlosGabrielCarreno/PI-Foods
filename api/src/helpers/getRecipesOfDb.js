const { Recipe, TypeOfDiet } = require('../db');

const getRecipesOfDb = async () => {
  try {
    const recipes = Recipe.findAll({
      attributes: ['id', 'title', 'summary'],
      include: TypeOfDiet,
    });
    console.log('recipes de Db:', recipes);
    return recipes;
  } catch (error) {
    return new Error(error);
  }
};

module.exports = { getRecipesOfDb };
