'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

const mongoose = require('mongoose')

const router = require('./router');

app.use(cors());
app.use(express.json());
app.use(router);

(async function () {
  try {
    await mongoose.connect('mongodb://localhost:27017/movie_db');
    app.listen(port, () => {
      console.log(`Server is listening at http://localhost:${port}`);
    });
  } catch (err) {
    console.log('Error connecting to database or setting server', err);
  }
})();