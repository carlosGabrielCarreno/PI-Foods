const { response, request } = require('express');
const { getRecipesByNameOfDb } = require('../helpers');
const { getRecipeDetailById } = require('../helpers/getRecipeDetailById');

const getRecipesByName = async (req = request, res = response) => {
  const { name } = req.query;
  if (!name) res.status(400).json({ msg: `Name is not defined!` });
  try {
    const recipe = await getRecipesByNameOfDb(name);
    res.status(200).json(recipe);
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
      if (recipe) {
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
