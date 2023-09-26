import './weatherApp.css';



const reqDataCurrent = ["icon", "text", "temp_c", "temp_f", "feelslike_c", "feelslike_f", "wind_kph", "wind_mph", "humidity", "cloud"];
const reqDataLocation = ["name", "region", "country", "localtime"];

function assignData(mainJson) {
    let weatherObj = {};
    for (let key of reqDataCurrent) {
        if (key == "icon" || key == "text") {
            weatherObj[key] = mainJson.current.condition[key];
        }
        else {
            weatherObj[key] = mainJson.current[key];
        }
    }

    for (let key of reqDataLocation) {
        weatherObj[key] = mainJson.location[key];
    }

    console.log(weatherObj)

    return weatherObj;
    
}

function pageLoad(objData) {
    // const icon = document.querySelector(".image");
    const weatherDescription = document.querySelector(".weather-description");
    const temperature = document.querySelector(".temperature");
    const city = document.querySelector(".city");
    const region = document.querySelector(".region");
    const country = document.querySelector(".country");
    const time = document.querySelector(".time");
    const date = document.querySelector(".date");
    const feelsLike = document.querySelector(".feels-like");
    const windSpeed = document.querySelector(".wind-speed");
    const humidity = document.querySelector(".humidity");
    const cloudsAbove = document.querySelector(".clouds-above");

    let timeDate = objData.localtime.split(" ");
    // icon.src = objData.icon;
    weatherDescription.textContent = objData.text;
    temperature.textContent = objData.temp_c + " C";
    console.log(objData.temp_c + "C");
    city.textContent = objData.name;
    region.textContent = objData.region;    
    country.textContent = objData.country;
    date.textContent = timeDate[0];
    time.textContent = timeDate[1];
    feelsLike.textContent =  objData.feelslike_c + "C";
    windSpeed.textContent = objData.wind_kph + "Kph";
    humidity.textContent = objData.humidity;
    cloudsAbove.textContent = objData.cloud + "%";
}

function getWeatherData(searchText) {
    fetch(`http://api.weatherapi.com/v1/current.json?key=936f8d1522364b2c8b8114545232409&q=${searchText}&aqi=yes&days=yes`)
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
    .then(weatherObj => pageLoad(weatherObj))
    .catch(err => alert(err.message))
}

getWeatherData("London");

function displayWeather() {
    let searchText = document.querySelector('#search-bar').value;
    getWeatherData(searchText);
}

let searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', displayWeather);