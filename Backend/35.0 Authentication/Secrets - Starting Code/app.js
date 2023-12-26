//jshint eversion:6

import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('home.ejs');
});

app.listen(3000, function () {
  console.log('listening on 3000');
});
