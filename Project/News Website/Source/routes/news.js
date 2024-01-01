const express = require('express');
const axios = require('axios');
const newsRouter = express.Router();

const API_KEY = '26f57ffe661149508088ce06b61096d8';
const URL = 'https://newsapi.org/v2/everything?q=';
newsRouter.get('/', async (req, res) => {
  const query = 'India' || req.body.query;

  try {
    const fetchNews = await axios.get(`${URL}${query}&apiKey=${API_KEY}`);

    // console.log(fetchNews.data);

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

newsRouter.get('/:id', async (req, res) => {
  const articleID = req.params.id;

  try {
    const fetchNews = await axios.get(`${URL}${articleID}&apiKey=${API_KEY}`);
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
