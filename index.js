let weather ={
    "apiKey": "af6267d4244cbeda1a23ad3d757143ed",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apiKey + "&units=metric"
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind; 
        document.querySelector(".city").textContent = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").textContent = description;
        document.querySelector(".temp").textContent = temp + "°C";
        document.querySelector(".humidity").textContent = "Humidity: " + humidity + "%";
        document.querySelector(".wind").textContent = "Wind Speed: " + speed + "km/h"
    },
    search: function (){
        this.fetchWeather(document.querySelector(".search").value)
    }

};

document.querySelector(".search-bar button").addEventListener("click", function(){
    weather.search();
});

document.querySelector(".search").addEventListener("keyup", function(e){
    if(e.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("Abuja");