import express from 'express';
import createHomepageTemplate from './views/index.js';
import createListTemplate from './views/list.js';

// create app
const app = express();
app.use(express.urlencoded({extended: false}));

// static assets
app.use(express.static('public'));

// APP ROUTES
/* Homepage - GET Homepage Template */
app.get('/', (req, res) => {
  res.send(createHomepageTemplate());
});
/* Books - GET Books List Template  */
app.get('/books', (req, res) => {
  res.send(createListTemplate());
});

// listen to port
app.listen(3000, () => {
  console.log('App listening on port 3000');
});