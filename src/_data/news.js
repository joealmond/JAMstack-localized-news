const axios = require("axios");
require("dotenv").config();

// Want to use async/await? Add the `async` keyword to your outer function/method.
module.exports = async function () {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=hu&category=business&apiKey=${process.env.NEWS_API_KEY}&pageSize=5`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
