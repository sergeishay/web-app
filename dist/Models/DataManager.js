////model
export class DataManager {
  constructor() {
    this.cityData = []
  };

  getDataFromDB = async () => {
    let getData =  await  $.get('/cities')
    this.cityData = getData
  };

  getCityData = async (cityName) => {
    let data = await $.get(`/city/${cityName}`)
    this.cityData.push(data)
    console.log(this.cityData)
  };

  saveCity = async (cityName) => {
    let cityToSave = this.cityData.findIndex(city => city.name === cityName)
    let newCity = await $.post('/city', this.cityData[cityToSave])
    this.cityData.splice(cityToSave, 1, newCity)
    console.log(this.cityData)
  };

  removeCity = async (cityName) => {
    let cityToDelete = this.cityData.findIndex(city => city.name === cityName)
    let city = this.cityData[cityToDelete].name
    let deleteCity = await $.ajax({ method: "DELETE", url: `/city/${city}` })
    this.cityData.splice(cityToDelete, 1)
  };
};

