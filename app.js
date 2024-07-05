const express = require("express");
const morgan = require("morgan");
const app = express();
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const routes = require("./scraper");

mongoose.connect(
  "mongodb+srv://axioma162:Dead_Man_39@nodeexpresstraining.y3kxza3.mongodb.net/?retryWrites=true&w=majority&appName=NodeExpressTraining"
);

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/products", routes);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
