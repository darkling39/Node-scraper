const express = require('express');
const morgan = require('morgan');
const app = express()
const bodyParser = require('body-parser');

const routes = require('./scraper')


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/products', routes)

app.use((req,res,next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app