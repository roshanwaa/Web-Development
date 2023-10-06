import express from 'express';
import axios, { Axios } from 'axios';

const app = express();
const port = 3000;
const API_URL = 'https://secrets-api.appbrewery.com/';

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = 'roshan.waa';
const yourPassword = '1234';
const yourAPIKey = '615b1ce9-c241-4e6a-bdec-ef26bdae8539';
const yourBearerToken = 'a1c43cc1-c2be-43c5-8022-82f6b956531e';

app.get('/', (req, res) => {
  res.render('index.ejs', { content: 'API Response.' });
});

app.get('/noAuth', async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint

  const resData = await axios
    .get(`${API_URL}random`)
    .then((res) => {
      // console.log(res.data);
      // res.json(res.data);
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
  // console.log(resData);

  res.render('index.ejs', { content: JSON.stringify(resData) });

  res.redirect('/');
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
});

app.get('/basicAuth', async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
  await axios
    .get(`${API_URL}all?page=2`, {
      auth: {
        yourUsername,
        yourPassword,
      },
    })
    .then((res) => {
      res.render('index.ejs', { content: JSON.stringify(resData) });
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });

  // try {
  //   const resData = await axios.get(`${API_URL}all`, {
  //     auth: {
  //       yourUsername,
  //       yourPassword,
  //     },
  //   });

  //   res.render('index.ejs', { content: JSON.stringify(resData) });
  // } catch (error) {
  //   res.render('index.ejs', { content: JSON.stringify(error.message) });
  // }
});

app.get('/apiKey', async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarrassment score of 5 or greater

  await axios
    .get(`${API_URL}filter`, {
      params: {
        score: 5,
        apiKey: yourAPIKey,
      },
    })
    .then((resData) => {
      res.render('index.ejs', { content: JSON.stringify(resData.data) });
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });

  //HINT: You need to provide a query parameter of apiKey in the request.
});

app.get('/bearerToken', (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
