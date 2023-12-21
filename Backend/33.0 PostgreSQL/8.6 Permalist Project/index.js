import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';

const app = express();
const port = 3000;

const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'permalist',
  password: '1100',
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let myItems = db.query('SELECT * FROM items');
console.log(myItems);

let items = [];

app.get('/', async (req, res) => {
  try {
    let allItems = await db.query('SELECT * FROM items ORDER BY id ASC');

    items = allItems.rows;
    console.log(items);

    res.render('index.ejs', {
      listTitle: 'Today',
      listItems: items,
    });
  } catch (error) {
    console.log(error);
  }
});

app.post('/add', async (req, res) => {
  try {
    const item = req.body.newItem;

    await db.query('INSERT INTO items  (title) VALUES ($1)', [item]);

    items.push({ title: item });
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
});

app.post('/edit', (req, res) => {});

app.post('/delete', (req, res) => {});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
