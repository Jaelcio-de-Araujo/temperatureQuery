function getTemp() {
  const apiKey = '';
  const lon = -46.9243;
  const lat = -23.6041;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch API data');
      }
      return response.json();
    })
    .then(data => {
      const temperatureKelvin = data.main.temp;
      const temperatureCelsius = temperatureKelvin - 273.15;
      document.querySelector(".temperature").textContent = temperatureCelsius.toFixed(1) + ' °C';
    })
    .catch(error => {
      console.error('Failed to fetch API data:', error);
    });
}

function goSite() {
  window.location.href = "https://openweathermap.org/current";
}

getTemp().then(() => {
  console.log('Temperature updated successfully!');
});
