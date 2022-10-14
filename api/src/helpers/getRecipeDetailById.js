const { Op } = require('sequelize');
const { Recipe, TypeOfDiet } = require('../db');

const getRecipeDetailById = async (id) => {
  try {
    const recipe = await Recipe.findOne({
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
      where: {
        id: {
          [Op.eq]: id,
        },
      },
      include: TypeOfDiet,
    });
    if (recipe) {
      return recipe;
    } else {
      throw new Error('recipe not found my friend!');
    }
  } catch (error) {
    return error.message;
  }
};

module.exports = { getRecipeDetailById };

/* const { axios } = require('axios');

const getRecipeDetailById = async (id) => {
  try {
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=`;
    const recipe = await axios.get(url + process.env.API_KEY);
    if (recipe) {
      return recipe;
    } else {
      throw new Error(recipe);
    }
  } catch (error) {
    return error.message;
  }
};

module.exports = { getRecipeDetailById }; */
