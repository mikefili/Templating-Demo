'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

let list = ['cats', 'corn', 'coffee', 'cool'];
let quantities = [
  { name: 'apples', quantity: 3 },
  { name: 'pears', quantity: 7 },
  { name: 'kiwis', quantity: 5 },
  { name: 'beers', quantity: 300 },
  { name: 'bananas', quantity: 8 },
]

app.set('view engine', 'ejs'); // We're going to work w/ server-side templates, specifically ejs

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/list', (req, res) => {
  res.render('list', { arrayOfItems: list });
});

app.get('/quantities', (req, res) => {
  res.render('quantities', { quantities: quantities});
});

app.listen(PORT, () => {
  console.log(`listening on the coolest port: ${PORT}`);
});