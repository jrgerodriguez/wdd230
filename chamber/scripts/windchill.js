const temperatureString = document.getElementById('weather').textContent;
const temperature = parseInt(temperatureString);

const windSpeedString = document.getElementById('windspeed').textContent;
const windSpeed = parseInt(windSpeedString);

const windChill = document.getElementById('windchill');

function calculateWindChill(t, v) {
    const windChill = 35.74 + (0.6215 * t) - (35.75 * (v ** 0.16)) + (0.4275 * t * (v ** 0.16))
    return windChill;
}

const windChillValue = calculateWindChill(temperature, windSpeed);

if (temperature <= 50 && windSpeed > 3) {
    windChill.textContent = `${windChillValue}°F`;
} else {
    windChill.textContent = 'N/A';
}