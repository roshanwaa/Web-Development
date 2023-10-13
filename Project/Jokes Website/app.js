import express from 'express';
import axios from 'axios';
import { join } from 'path';
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/getJoke', async (req, res) => {
  try {
    const jokeData = await fetchJoke();
    res.json({ joke: jokeData.joke });
  } catch (error) {
    console.error('Error fetching joke:', error);
    res.json({ joke: 'Failed to fetch joke' });
  }
});

async function fetchJoke() {
  const response = await axios.get('https://v2.jokeapi.dev/joke/Any');
  return response.data;
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
