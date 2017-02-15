'use strict';

const express = require('express');
const mongoose = require('mongoose');

//DB setup
mongoose.connect('mongodb://mongo:27017');

const app = express();
app.get('/', function (req, res) {
  res.send('Heworldessssf\n');
});

app.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});
