const express    = require('express');
const bodyParser = require('body-parser');

const app = express();

const feedRoutes = require('./routes/feed');

app.use(bodyParser.json());

app.use('/feed', feedRoutes);

app.listen(3000, err => {
  if (err) return console.error(err);
  console.log('Server listening on port 3000');
});
