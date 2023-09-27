import express from 'express';
const app = express();
const port = 3000; // You can change the port number

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

let tasks = {
  day: [],
  work: [],
};

// app.get('/', (req, res) => {
//   res.render('index', { tasks });
// });

app.get('/', (req, res) => {
  res.render('index', { tasks, list: 'day' }); // Pass 'list' as a variable
});
app.post('/addTask', (req, res) => {
  const { task, list } = req.body;
  tasks[list].push(task);
  res.redirect('/');
});

app.post('/completeTask/:list/:index', (req, res) => {
  const { list, index } = req.params;
  tasks[list][index] = `<s>${tasks[list][index]}</s>`;
  res.redirect('/');
});

app.post('/deleteTask', (req, res) => {
  const { list, index } = req.body;
  tasks[list].splice(index, 1);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
