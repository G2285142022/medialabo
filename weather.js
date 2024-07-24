document.getElementById('search-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const cityId = document.getElementById('city-id').value;
  fetchWeatherData(cityId);
});

async function fetchWeatherData(cityId) {
  const url = `https://www.nishita-lab.org/web-contents/jsons/openweather/${cityId}.json`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error('Error fetching the weather data:', error);
  }
}

function displayWeather(data) {
  const resultDiv = document.getElementById('result');
  const weatherImage = getWeatherImage(data.weather[0].main, data.weather[0].description);
  resultDiv.innerHTML = `
    <div class="weather-info">
      <h2>${data.name}</h2>
      <img src="${weatherImage}" alt="${data.weather[0].main}" class="weather-image">
      <p>緯度: ${data.coord.lat}</p>
      <p>経度: ${data.coord.lon}</p>
      <p>天気: ${data.weather[0].description}</p>
      <p>最低気温: ${data.main.temp_min}°C</p>
      <p>最高気温: ${data.main.temp_max}°C</p>
      <p>湿度: ${data.main.humidity}%</p>
      <p>風速: ${data.wind.speed} m/s</p>
      <p>風向: ${data.wind.deg}°</p>
    </div>
  `;
}

function getWeatherImage(weather, description) {
  if (weather === 'Clear') {
    return 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiaLQPi4hmTNQJq2cG-7HEn4fBQFfPXi1sVnpvE7GiN1s2jb9VTUihZ3QS6JIY6JHGA_tZE0M9H0Vw38GseIChOt2nLeabJe-dATLgnmhxVWI_fl_GV_9MeKSG6aNUivHYCR688z7U1xmKG/s1600/mark_tenki_hare.png';
  } else if (weather === 'Clouds' || description.includes('雲')) {
    return 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8kxIOuDv8qbPWwLkCkFSZFyxk0UG8KDebkEcJXLoXmx3v0PeJHcKVtaok4RPQvEEsN9q2MFgXsAWNVepCuR0t5jA4Sanw2hVvrfWnaRkXCoYEd7cI-wrdvSBFNx09TwwpLc6s1cb6Q5cV/s1600/mark_tenki_kumori.png';
  } else if (weather === 'Rain') {
    return 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqhcAxdnCPa6wbLjT95MZzO6e5am0p5i0X1n0OPWzfQo1T3IZUJK_cL_CYdGy99KMfSWk_BJ20B6Le99nGJiFkhBX0w16P_eEkOPzpmw8hSswOJAUKR7go99x3Qi5d0MR2U_G5m5i4Zi29/s1600/mark_tenki_umbrella.png';
  } else if (weather === 'Mist' || weather === 'Fog') {
    return 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbVlU3I1gh0OOkvhmlIAx8Ph0-rKEcfgad0A41mobCIVmKskTXd8PLaKtgz-1Q06yPA1aSiulDU_h1ZOpc97CIWJwfc9ZcAaxZCcTkxSGbIlvxRn3bckJG451t0EcgexSkOLbAZ9Tx00qI/s800/yama_kiri.png';
  } else {
    return '';
  }
}
