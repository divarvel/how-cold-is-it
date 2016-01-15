"use strict";

const express = require('express');
const Temp = require('./temperature.js');
const redis = require("redis");
const PORT = +process.env.PORT;
const REDIS_URL = process.env.REDIS_URL;

if(!PORT || !REDIS_URL) {
	console.error("Missing env_variable");
	process.exit(1);
}

let client = redis.createClient(REDIS_URL);
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

app.get('/history', (req, res) => {
  client.get("history", (err, r) => {
    res.send(r);
  })	
});

app.listen(PORT, () => console.log("Server started on port " + PORT));


