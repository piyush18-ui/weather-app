function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "YOUR_API_KEY_HERE";

    if (city === "") {
        alert("Please enter city name");
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("cityName").innerHTML = data.name;
            document.getElementById("temp").innerHTML =
                "Temperature: " + data.main.temp + " °C";
            document.getElementById("desc").innerHTML =
                "Weather: " + data.weather[0].description;
            document.getElementById("humidity").innerHTML =
                "Humidity: " + data.main.humidity + "%";
            document.getElementById("wind").innerHTML =
                "Wind Speed: " + data.wind.speed + " m/s";
        })
        .catch(() => {
            alert("City not found!");
        });
}
