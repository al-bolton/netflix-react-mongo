'use strict';

const mongoose = require('mongoose');

const db = {};

db.Movie = require('./movie.model')(mongoose);

module.exports = db;