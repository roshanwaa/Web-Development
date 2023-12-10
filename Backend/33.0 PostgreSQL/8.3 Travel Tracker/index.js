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
});

app.post('/add', async (req, res) => {
  const country = req.body.country;

  try {
    const getCountriesData = await db.query('SELECT * FROM public.countries');

    getCountriesData.rows.forEach(async (row) => {
      if (row.country_name === country) {
        // Use asynchronous version of db.query and await the result
        await db.query(
          'INSERT INTO visited_country (country_code) VALUES ($1)',
          [row.country_code]
        );
      }
    });

    res.redirect('/');
  } catch (error) {
    console.error('Error adding data:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
