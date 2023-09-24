import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

let fName = '';
let lName = '';

app.use((req, res, next) => {
  fName = req.body['fName'];
  lName = req.body['lName'];
  next();
});

app.get('/', (req, res) => {
  res.render('index.ejs');
  // res.json('ok');
});

app.post('/submit', (req, res) => {
  // res.json({ fName: fName.length, lName: lName.length });
  let nameLength = fName.length + lName.length;
  res.render('index.ejs', { nameLength });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
