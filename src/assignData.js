const reqDataCurrent = ["icon", "text", "temp_c", "temp_f", "feelslike_c", "feelslike_f", "wind_kph", "wind_mph", "humidity", "cloud", "is_day"];
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

    return weatherObj;
    
}

export { assignData }