const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const api = require('./server/routes/api');
const app = express();


app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', api);

mongoose.connect('mongodb://localhost/CityData', { useNewUrlParser: true });


const port = 3000  //PORT 
app.listen(port, function () {
    console.log(`Running on port ${port}`);
  });