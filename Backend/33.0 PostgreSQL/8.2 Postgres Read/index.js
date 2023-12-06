import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';

const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'world',
  password: '1100',
  port: 5432,
});

const app = express();
const port = 3000;
db.connect();

let quiz = [];
db.query('SELECT * FROM public.flags', (err, results) => {
  if (err) throw err.stack;
  quiz = results.rows;

  db.end();
});

let totalCorrect = 0;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let currentQuestion = {};

// GET home page
app.get('/', (req, res) => {
  totalCorrect = 0;
  nextQuestion();
  console.log(currentQuestion);
  res.render('index.ejs', { question: currentQuestion });
});

// POST a new post
app.post('/submit', (req, res) => {
  let answer = req.body.answer.trim();
  let isCorrect = false;
  console.log(currentQuestion.name, answer);
  if (currentQuestion.name.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;
    console.log(totalCorrect);
    isCorrect = true;
  }

  nextQuestion();
  res.render('index.ejs', {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

function nextQuestion() {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
  currentQuestion = randomCountry;
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
