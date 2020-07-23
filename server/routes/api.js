const express = require('express');
const router = express.Router();
const City = require('../models/City')
const axios = require('axios');
const { template } = require('handlebars');
//Routes


router.get('/city/:cityName', function (req, res) {
  const { cityName } = req.params
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=bd72b5c0361b6f861ccf5029afacdcf9`)
    .then(function (response) {
      urlPic = response.data.weather[0].icon
      urlPic = `http://openweathermap.org/img/wn/${urlPic}.png`
      let data = {
        name : response.data.name,
        temperature :Math.round( response.data.main.temp - 273), 
        condition : response.data.weather[0].description,
        conditionPic:urlPic
      }
      res.send(data)
    })
    .catch(function (error) {
      console.log(error)
    })
});

router.get('/cities', function (req, res) {
   City.find({}).exec(function(err , cities){
    //  let corentCity = cities[0]
     res.send(cities)
    })
});

router.post('/city', function (req, res) {
  const city = req.body
  const newCity = new City(city)
  newCity.save()
  res.send(newCity)
});

router.delete('/city/:cityName', function (req, res) {
  let { cityName } = req.params
  City.deleteOne({name:cityName}).exec()
  res.end()
});



module.exports = router;