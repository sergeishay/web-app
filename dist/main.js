import {DataManager}  from "/Models/DataManager.js"
import{ Renderer}  from "/View/Renderer.js"
const render = new Renderer();
const model = new DataManager()

////controler
const loadPage = async function(){
    await model.getDataFromDB()
    render.renderData(model.cityData)
}

const handleSearch =async function(input){
     await model.getCityData(input)
     render.renderData(model.cityData)
}

$("button").on("click" , function(){
    let input = $("input").val()
    handleSearch(input)
})

$("#container").on( "click" , '.favorite' ,async function(){
    let favor = $(this).siblings(".cityName").text()
     await model.saveCity(favor)
    // let some = model.cityData.find(name => name.name = favor)
    // if('_id' in some){
    //     $(this).toggleClass("addFavorite");
    // }
    // render.renderData(model.cityData)
})
$("#container").on( "click" , '.delete' , async function(){
    let del = $(this).siblings(".cityName").text()
    await model.removeCity(del)
    render.renderData(model.cityData)
})
$("#container").on( "click" , '.city' , async function(){
    let showCity = $(this)
    console.log(showCity)
    // await model.chosenCity.push(show)
    render.renderCity(model.chosenCity)
})


loadPage()
