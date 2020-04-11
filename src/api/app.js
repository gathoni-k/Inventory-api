const express = require('express');
var logger = require('morgan');

// Initialize express
const app = express();

// connect to database
require('../config/dbConfig')

// use middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// require routes
let categoryRoute = require('./router').categoryRoute
let itemRoute = require('./router').itemRoute
app.use('/api/item', itemRoute)
app.use('/api/category', categoryRoute)


// export app
module.exports = app;
