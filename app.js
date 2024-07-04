const express = require('express');

const app = express()

const routes = require('./scraper')

app.use('/products', routes)

module.exports = app