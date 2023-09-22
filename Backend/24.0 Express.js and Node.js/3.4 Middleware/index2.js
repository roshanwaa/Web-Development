import express from 'express';
import morgan from 'morgan';

const app = express();
const port = 3000;

app.use(morgan('tiny')); // log = GET / 304 - - 6.836 ms

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
