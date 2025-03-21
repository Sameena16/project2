const apiKey = 'YOUR_API_KEY';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const searchButton = document.getElementById('searchButton');
const cityInput = document.getElementById('cityInput');
const weatherInfo = document.getElementById('weatherInfo');

searchButton.addEventListener('click', () => {
    const city = cityInput.value;
    fetch(${apiUrl}?q=${city}&appid=${apiKey}&units=metric)
        .then(response => response.json())
        .then(data => {
            weatherInfo.innerHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            weatherInfo.innerHTML = '<p>Unable to retrieve weather data. Please try again.</p>';
            console.error(error);
        });
});

