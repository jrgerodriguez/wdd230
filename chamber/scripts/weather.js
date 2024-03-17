const weatherArea = document.querySelector('#weather');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');
const tempForecast = document.querySelector('#temp-for');
const forecastIcon = document.querySelector('#forecast-icon');
const forecastCaptionDesc = document.querySelector('forecast-figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=13.70&lon=-89.22&appid=f04c81d1f43f0c8dc412c6cf03b6a44b&units=metric';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    weatherArea.innerHTML = `${Math.round(data.main.temp)}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = ` ${capitalizeCaption(desc)}`;
}

function capitalizeCaption(phrase) {
    let words = phrase.split(' '); //we separate the phrase in words by the space " "
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    } // we iterate through every element (words) and capitalized the 0 character.
    let capitalizedPhrase = words.join(" "); // then we put them all together

    return capitalizedPhrase
}

// 3-DAY FORECAST

const forecastUrl = 'api.openweathermap.org/data/2.5/forecast?lat=13.70&lon=-89.22&appid=f04c81d1f43f0c8dc412c6cf03b6a44b';

async function forecastApiFetch() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecastResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

forecastApiFetch();

function displayForecastResults(data) {
    tempForecast.innerHTML = `${Math.round(data.main.temp)}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    forecastIcon.setAttribute('src', iconsrc);
    forecastIcon.setAttribute('alt', desc);
    forecastCaptionDesc.textContent = ` ${capitalizeCaption(desc)}`;
}