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
        console.log(name,icon,description,temp,humidity,speed)
    }
};