'use strict';
const express = require('express');

const logger = require('./logger');
const bookmarksRouter = express.Router();
const bodyParser = express.json();
const bookmarks = require('./store');

bookmarksRouter
  .route('/')
  .get((req, res) => {
    res
      .json(bookmarks);
  });


module.exports = bookmarksRouter;