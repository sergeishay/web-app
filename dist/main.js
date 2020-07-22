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

$("#container").on( "click" , '.favorite' , function(){
    let favor = $(this).siblings(".cityName").text()
    model.saveCity(favor)
    $(this).css("color" , "green")
    render.renderData(model.cityData)
})
$("#container").on( "click" , '.delete' , async function(){
    let del = $(this).siblings(".cityName").text()
    await model.removeCity(del)
    render.renderData(model.cityData)
})



loadPage()
