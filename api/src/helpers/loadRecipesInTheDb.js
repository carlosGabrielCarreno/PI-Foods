const { getAllRecipesOfApi } = require('./getAllRecipesOfApi');

const { Recipe, TypeOfDiet } = require('../db');
const { data } = require('./data');

const loadRecipesInTheDb = async () => {
  //const recipes = await getAllRecipesOfApi()

  try {
    data.forEach(async (recipe) => {
      const objRecipe = {
        title: recipe.title,
        image: recipe.image,
        vegetarian: recipe.vegetarian,
        vegan: recipe.vegan,
        glutenFree: recipe.glutenFree,
        summary: recipe.summary,
        healthScore: recipe.healthScore,
        analyzedInstructions: recipe.analyzedInstructions,
      };
      const newRecipe = await Recipe.create(objRecipe);
      //todavia no...
      /* if (recipe.diets && recipe.diets.length) {
        const newTypeOfDiet = await TypeOfDiet.create({ diets: recipe.diets });
        newRecipe.addTypeOfDiets(newTypeOfDiet);
      } */
    });
    console.log('all recipes creates');
    return 'ok';
  } catch (error) {
    return { error };
  }
};

module.exports = { loadRecipesInTheDb };
