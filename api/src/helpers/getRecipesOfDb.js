const { Recipe, TypeOfDiet } = require('../db');

const getRecipesOfDb = async () => {
  try {
    const recipes = await Recipe.findAll({
      attributes: [
        'id',
        'title',
        'summary',
        'image',
        'vegetarian',
        'vegan',
        'glutenFree',
        'healthScore',
        'analyzedInstructions',
        'cuisines',
        'dishTypes',
      ],
      include: TypeOfDiet,
    });
    /*  console.log(
      'recipes de Db:',
      recipes.map((r) => r.title)
    ); */
    return recipes;
  } catch (error) {
    return new Error(error);
  }
};

module.exports = { getRecipesOfDb };
