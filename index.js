//DECLARE VARIBLES
var lon;
var lat;
var weatherCard = document.querySelector(".weather-card");
var currentLocation = document.querySelector("#cur-location");
var search = document.querySelector("#search");
var searchBtn = document.querySelector("#search-btn");
const api = "a08f2632be645dfa09aa34bbe0339647";



//EVENT HANDLERS
currentLocation.addEventListener("click", locationFunction);
searchBtn.addEventListener("click", searchFunction);

//FUNCTIONS

//CURRENT LOCATION FUNCTION
function locationFunction() {
    getLocation()
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                lat = position.coords.latitude;
                lon = position.coords.longitude;
                const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`;
                fetch(url)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {

                        //WEATHER BOX IN WEATHER CARD
                        var weatherBox = document.createElement("div");
                        weatherBox.setAttribute("class", "weather-box");
                        weatherCard.appendChild(weatherBox);

                        //CITY NAME IN WEATHER BOX
                        var cityName = document.createElement("h1");
                        cityName.innerHTML = data.name;
                        weatherBox.appendChild(cityName);

                        //TEMPRATURE IN WEATHER BOX
                        var heading = document.createElement("h2");
                        heading.innerHTML = "TEMP <br>" + parseInt(data.main.temp - 273) + "\u00B0" + "C";
                        weatherBox.appendChild(heading);

                        //ICON IMAGE
                        var icon = document.createElement("img");
                        icon.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
                        weatherBox.appendChild(icon);

                        //HUMIDITY IN WEATHER BOX
                        var humidity = document.createElement("h4");
                        humidity.innerHTML = "HUMIDITY : " + data.main.humidity;
                        weatherBox.appendChild(humidity);

                        //WINDSPEED IN WEATHER BOX
                        var wind = document.createElement("h4");
                        wind.innerHTML = "WIND : " + data.wind.speed;
                        weatherBox.appendChild(wind);
                    });
            });

        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }
}


//SEARCH LOCATION FUNCTION
function searchFunction() {
    var city = search.value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            //WEATHER BOX IN WEATHER CARD
            var weatherBox = document.createElement("div");
            weatherBox.setAttribute("class", "weather-box");
            weatherCard.appendChild(weatherBox);

            //CITY NAME IN WEATHER BOX
            var cityName = document.createElement("h1");
            cityName.innerHTML = data.name;
            weatherBox.appendChild(cityName);

            //TEMPRATURE IN WEATHER BOX
            var heading = document.createElement("h2");
            heading.innerHTML = "TEMP <br>" + parseInt(data.main.temp - 273) + "\u00B0" + "C";
            weatherBox.appendChild(heading);

            //ICON IMAGE
            var icon = document.createElement("img");
            icon.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            weatherBox.appendChild(icon);

            //HUMIDITY IN WEATHER BOX
            var humidity = document.createElement("h4");
            humidity.innerHTML = "HUMIDITY : " + data.main.humidity;
            weatherBox.appendChild(humidity);

            //WINDSPEED IN WEATHER BOX
            var wind = document.createElement("h4");
            wind.innerHTML = "WIND : " + data.wind.speed;
            weatherBox.appendChild(wind);
        });
    search.value = "";
}

