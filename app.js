const express = require('express');
const morgan = require('morgan');
const app = express()

const routes = require('./scraper')

app.use('/products', routes)
app.use(morgan('dev'))


module.exports = app