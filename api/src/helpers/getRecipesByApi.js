const axios = require('axios');

const path = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=';

const getRecipesByApi = async (numberPage) => {
  try {
    const url = `${path}${process.env.API_KEY}&number=${numberPage}`;
    const {
      data: { results },
    } = await axios.get(url);
    return results;
  } catch (error) {
    return [];
  }
};

module.exports = {
  getRecipesByApi,
};
