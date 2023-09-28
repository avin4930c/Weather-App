import './weatherApp.css';



const reqDataCurrent = ["icon", "text", "temp_c", "temp_f", "feelslike_c", "feelslike_f", "wind_kph", "wind_mph", "humidity", "cloud"];
const reqDataLocation = ["name", "region", "country", "localtime"];

const switchButton = document.querySelector('#switch');

let tempObj;

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
    const errorMessage = document.querySelector('.error-message');

function pageLoad(objData) {
    tempObj = objData;
    // const icon = document.querySelector(".image");
    

    if (switchButton.checked) {
        temperature.textContent = objData.temp_f + " F";
        feelsLike.textContent =  objData.feelslike_f + " F";
        windSpeed.textContent = objData.wind_mph + " Mph";
    }

    else {
        temperature.textContent = objData.temp_c + " C";
        feelsLike.textContent =  objData.feelslike_c + " C";
        windSpeed.textContent = objData.wind_kph + " Kph";
    }

    let timeDate = objData.localtime.split(" ");
    // icon.src = objData.icon;
    weatherDescription.textContent = objData.text;
    
    console.log(objData.temp_c + "C");
    city.textContent = objData.name;
    region.textContent = objData.region;    
    country.textContent = objData.country;
    date.textContent = timeDate[0];
    time.textContent = timeDate[1];
    humidity.textContent = objData.humidity + "%";
    cloudsAbove.textContent = objData.cloud + "%";
    errorMessage.textContent = "";
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

let searchButton = document.querySelector('.search-button');
let searchBar = document.querySelector('#search-bar');

function displayWeather() {
    let searchText = document.querySelector('#search-bar').value;
    searchText = document.querySelector('#search-bar').value;
    getWeatherData(searchText);
}

searchBar.addEventListener("keypress", function(e) {
    if (e.keyCode == 13) {
        console.log("Hello")
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