const express = require('express');
const axios = require('axios');
const newsRouter = express.Router();

newsRouter.get('', async (req, res) => {
  try {
    const fetchNews = await axios.get(
      'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=26f57ffe661149508088ce06b61096d8'
    );

    console.log(fetchNews.data);

    res.render('news', { articles: fetchNews.data.articles });
  } catch (error) {
    if (error.response) {
      res.render('news', { articles: null });

      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      res.render('news', { articles: null });

      console.log(error.request);
    } else {
      res.render('news', { articles: null });
      console.log('Error: ' + error.response.status + ' ' + error.message);
    }
  }
});

module.exports = newsRouter;
