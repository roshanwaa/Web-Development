const express = require('express');
const axios = require('axios');
const newsRouter = express.Router();

newsRouter.get('', async (req, res) => {
  try {
    const fetchNews = await axios.get(
      'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=26f57ffe661149508088ce06b61096d8'
    );

    console.log(fetchNews.data);

    res.render('news', { articles: fetchNews.data.articles });
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error: ' + error.response.status + ' ' + error.message);
    }
  }
});

module.exports = newsRouter;
