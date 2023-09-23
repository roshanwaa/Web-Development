import express from 'express';

const app = express();

app.get('/', (req, res) => {
  const d = new Date();

  let day = 'a weekday';
  let work = "It's time to work hard";

  if (d.getDay() === 6 || d.getDate() === 0) {
    day = 'a weekend';
    work = "it's time to have some fun";
  }

  res.render('index.ejs', { day, work });
});

app.listen(3000);
