const { response, request } = require('express');
const { getRecipesByNameOfDb } = require('../helpers');
const { getRecipeDetailById } = require('../helpers/getRecipeDetailById');

const getRecipesByName = async (req = request, res = response) => {
  const { name } = req.query;
  if (!name) res.status(400).json({ msg: `Name is not defined!` });
  try {
    const recipes = await getRecipesByNameOfDb(name);
    console.log('recipe de get', recipes);
    if (recipes) {
      res.status(200).json(recipes);
    } else {
      throw new Error({ msg: `Not name in the recipes!` });
    }
  } catch (error) {
    res.status(404).send(error);
  }
};

const getDetailOfRecipe = async (req = request, res = response) => {
  const { id } = req.params;
  if (!id) {
    res.status(404).send('id is undefined');
  } else {
    try {
      const recipe = await getRecipeDetailById(id);
      if (recipe.id) {
        res.status(200).json(recipe);
      } else {
        throw new Error(recipe);
      }
    } catch (error) {
      res.status(404).send(error.message);
    }
  }
};

module.exports = {
  getRecipesByName,
  getDetailOfRecipe,
};
