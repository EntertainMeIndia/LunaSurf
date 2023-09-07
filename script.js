// JavaScript for navigation buttons
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const slideBar = document.querySelector('.slide-bar');
const slideItems = slideBar.querySelectorAll('a');

let currentIndex = 0;

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slideItems.length) % slideItems.length;
  updateSlide();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slideItems.length;
  updateSlide();
});

function updateSlide() {
  slideItems.forEach((item, index) => {
    if (index === currentIndex) {
      item.style.height = 'auto'; // Show the current item
    } else {
      item.style.height = '0'; // Hide other items
    }
  });
}

const apiKey = '4c52aa5f5d74f39c771e069c57194f03'; // Replace with your OpenWeatherMap API key
const weatherContainer = document.getElementById('weather-info');

fetch(`https://api.openweathermap.org/data/2.5/weather?q=Jalna,IN&appid=${apiKey}&units=metric`)
  .then((response) => response.json())
  .then((data) => {
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const weatherDescription = data.weather[0].description;

    // Display weather information in the square-rounded-container
    weatherContainer.innerHTML = `
      <p>City: Jalna, Maharashtra, India</p>
      <p>Temperature: ${temperature}°C</p>
      <p>Humidity: ${humidity}%</p>
      <p>Weather: ${weatherDescription}</p>
    `;
  })
  .catch((error) => {
    console.error('Error fetching weather data:', error);
    weatherContainer.innerHTML = '<p>Failed to fetch weather data</p>';
  });
