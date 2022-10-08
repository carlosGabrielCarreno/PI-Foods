const { response, request } = require('express');

const getRecipesByName = (req = request, res = response) => {
  const { name } = req.query;
  try {
    // get a la api
    res.status(200).json(name);
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
