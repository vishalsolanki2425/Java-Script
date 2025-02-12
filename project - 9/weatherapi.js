function getWeather() {
    const cityInput = document.getElementById("city");
    const city = cityInput.value;

    if (!city) {
        alert("Please enter a city name");
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bb3fbfdb74d8bc273ee54808b4724d69&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const weatherCondition = data.weather[0].main.toLowerCase();
            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

            let backgroundImage = "";
            if (weatherCondition.includes("clear")) {
                backgroundImage = "url('clear_sky.jpg')";
            } else if (weatherCondition.includes("cloud")) {
                backgroundImage = "url('cloudy.jpg')";
            } else if (weatherCondition.includes("rain")) {
                backgroundImage = "url('rainy.jpg')";
            } else if (weatherCondition.includes("snow")) {
                backgroundImage = "url('snowy.jpg')";
            } else if (weatherCondition.includes("thunderstorm")) {
                backgroundImage = "url('storm.jpg')";
            } else {
                backgroundImage = "";
            }

            document.body.style.background = `${backgroundImage} no-repeat center center/cover`;

            document.getElementById("weatherResult").innerHTML = `
                <h2>${data.name}</h2>
                <img src="${iconUrl}" alt="Weather Icon">
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Weather: ${data.weather[0].description}</p>`;

            cityInput.value = ""; 
        })
        .catch(error => {
            document.getElementById("weatherResult").innerHTML = `<p>Error fetching weather data</p>`;
            console.log(error);
        });
}
