"use strict";

const express = require('express');
const Temp = require('./temperature.js');

let app = express();

app.get('/farenheit/:value', (req, res) => {
  res.send({
    celcius: Temp.f2c(+req.params.value),
    farenheit: req.params.value,
  });
})

app.get('/celcius/:value', (req, res) => {
  res.send({
    celcius: req.params.value,
    farenheit: Temp.c2f(+req.params.value)
  });
})

app.listen(3000, () => console.log("Server started on port 3000"));
