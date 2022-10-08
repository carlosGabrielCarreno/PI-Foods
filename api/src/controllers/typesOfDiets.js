const { response, request } = require('express');

const createRecipe = (req = request, res = response) => {
  const { name, readyInMinutes } = req.body;

  try {
    res.status(200).json({
      name,
      readyInMinutes,
    });
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const getDietTypes = (req = request, res = response) => {
  try {
    res.json('diet types');
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = {
  createRecipe,
  getDietTypes,
};
