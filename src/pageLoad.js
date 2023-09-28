function pageLoad(objData, tempObj, icon, weatherDescription, temperature, city, region, country, time, date, feelsLike, windSpeed, humidity, cloudsAbove, errorMessage, switchButton) {
    
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
    icon.src = "https:" + objData.icon;
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

    console.log(objData);
}

export { pageLoad }