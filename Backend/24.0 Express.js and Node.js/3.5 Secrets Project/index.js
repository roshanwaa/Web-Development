//The password is ILoveProgramming
/* =================================================================== */

import bodyParser from 'body-parser';
import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
var password = '';

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(req.body);
  password = req.body['password'];
  next();
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/check', (req, res) => {
  if (password === 'ILoveProgramming') {
    res.sendFile(__dirname + '/public/secret.html');
  } else {
    res.sendFile(__dirname + '/public/index.html');
  }
});

app.listen(3000);
