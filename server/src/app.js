const express = require('express');
// middleware of express - transforms String from request to JS Object
const bodyParser = require('body-parser');
const cors = require('cors');
// is a logger specifically for express.
const morgan = require('morgan');
const db = require('../db/connector');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/posts', (req, res) => {
  console.log(db);

  res.send(
    [{
      title: 'Hello World!',
      description: 'Hi there! How are you?',
    }],
  );
});

app.post('/posts', (req, res) => {

});

app.listen(process.env.PORT || 8081);
