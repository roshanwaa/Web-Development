import bodyParser from 'body-parser';
import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;

const app = express();
var bandName = '';

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(req.body);
  bandName = req.body['street'] + req.body['pet'];
  next();
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/submit', (req, res) => {
  req.body;
  console.log(res.send(`<h1>bandName</h1>`));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
