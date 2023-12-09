import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';

const app = express();
const port = 3000;

const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'world',
  password: '1100',
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', async (req, res) => {
  //Write your code here.

  const result = await db.query('SELECT country_code FROM visited_country');
  let countries = [];

  result.rows.forEach((row) => {
    countries.push(row.country_code);
  });

  // for (let i = 0; i < result.rows.length; i++) {
  //   countries.push(result.rows[i].country_code);
  //   // console.log(result.rows[i].country_code);
  // }

  res.render('index.ejs', { countries: countries, total: result.rows.length });
  db.end();
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
