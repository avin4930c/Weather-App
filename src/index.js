import './weatherApp.css'
import './switchButton.css'
import { assignData } from './assignData.js';
import { pageLoad } from './pageLoad.js';

const weatherDescription = document.querySelector(".weather-description");
const temperature = document.querySelector(".temperature");
const icon = document.querySelector(".image");
const city = document.querySelector(".city");
const region = document.querySelector(".region");
const country = document.querySelector(".country");
const time = document.querySelector(".time");
const date = document.querySelector(".date");
const feelsLike = document.querySelector(".feels-like");
const windSpeed = document.querySelector(".wind-speed");
const humidity = document.querySelector(".humidity");
const cloudsAbove = document.querySelector(".clouds-above");
const errorMessage = document.querySelector('.error-message');

const searchButton = document.querySelector('.search-button');
const searchBar = document.querySelector('#search-bar');

const switchButton = document.querySelector('#switch');

let tempObj = {};

function getWeatherData(searchText) {
    fetch(`https://api.weatherapi.com/v1/current.json?key=936f8d1522364b2c8b8114545232409&q=${searchText}&aqi=yes&days=yes`)
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            throw new Error(data.error.message)
        }
        else if (data.current.condition.text) {
            return data
        }
    })
    .then(data => assignData(data))
    .then(weatherObj => {
        pageLoad(weatherObj, tempObj, icon, weatherDescription, temperature, city, region, country, time, date, feelsLike, windSpeed, humidity, cloudsAbove, errorMessage, switchButton)
        tempObj = weatherObj;
    })
    .catch(err => {
        const errorMessage = document.querySelector('.error-message');
        if (err.message == "Parameter q is missing.") {
            errorMessage.textContent = "Enter the city name";
        }
        else {
            errorMessage.textContent = err.message;
        }
        
    })
}

getWeatherData("London");

function displayWeather() {
    let searchText = document.querySelector('#search-bar').value;
    searchText = document.querySelector('#search-bar').value;
    getWeatherData(searchText);
}

searchBar.addEventListener("keypress", function(e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        searchButton.click();
    }
});

searchButton.addEventListener('click', displayWeather);

switchButton.addEventListener('click', () => {
    if (switchButton.checked) {
        temperature.textContent = tempObj.temp_f + " F";
        feelsLike.textContent =  tempObj.feelslike_f + " F";
        windSpeed.textContent = tempObj.wind_mph + " Mph";
    }

    else {
        temperature.textContent = tempObj.temp_c + " C";
        feelsLike.textContent =  tempObj.feelslike_c + " C";
        windSpeed.textContent = tempObj.wind_kph + " Kph";
    }
});