const { response, request } = require('express');
const { getRecipesByNameOfDbAndApi } = require('../helpers');

const getRecipesByName = async (req = request, res = response) => {
  const { name } = req.query;
  if (!name) res.status(400).json({ msg: `Name is not defined!` });
  try {
    const recipe = await getRecipesByNameOfDbAndApi(name);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const getDetailOfRecipe = (req = request, res = response) => {
  const { id } = req.params;
  try {
    // get a la api
    res.status(200).json(id);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = {
  getRecipesByName,
  getDetailOfRecipe,
};
