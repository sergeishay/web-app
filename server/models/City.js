const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CitySchema = new Schema({
  name: String,
  temperature: Number,
  condition: String,
  conditionPic: String,
});

const City = mongoose.model('City', CitySchema , 'CityData');

module.exports = City;
