import express from 'express';

const app = express();
const port = 3000;
const __dirname = 'public';

// Static files
app.use(express.static(__dirname));
// public static files directory (default is public static files directory)

app.use('CSS', express.static(__dirname + '/public/CSS'));
app.use('Image', express.static(__dirname + '/public/Image'));
app.use('JS', express.static(__dirname + '/public/JS'));

// Templating Engine
app.set('views', './Source/Views');
app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
