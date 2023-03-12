function readerWeather(weather)
console.log(weather);
var resultsContainer = document.querySelector("#weather-results");

//Create h2 for name
var city = document.createElement("h2");
city. textContent = weather.name;
resultsContainer.append(city);

// Create p for temp, humidity, wind, description
var temp = document.createElement("p");
temp.textContent = "temp:" + weather.main.temp + "f";
resultsContainer.append(temp);

var humidity = document.createElement("p");
humidity.textContent = "humidity:" + weather.main.humidity + "%";
resultsContainer.append(humidity);

var wind = document.createElement("p");
wind.textContent = "wind:" + weather.wind.speed + "mph" + weather.wind.deg + "°";
resultsContainer.append(wind);

var description = document.createElement("p");
descrition.textContent = weattherDetails.description;
resultsContainer.append(description);

function fetchWeather(query){
    var url="https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=bd9c22b50e59bccdca25f28c48704877"
    fetch(url).then((response)=>response.json()).then((data)=>console.log(data));

}
fetchWeather();