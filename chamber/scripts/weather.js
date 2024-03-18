const weatherArea = document.querySelector('#weather');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');

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

// -------------------- 3-DAY FORECAST -----------------------------------

const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=13.70&lon=-89.22&appid=f04c81d1f43f0c8dc412c6cf03b6a44b&units=metric';

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
    if (data.list && data.list.length > 0) {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        const afterTomorrow = new Date(today);
        afterTomorrow.setDate(today.getDate() + 2);
        const thirdDay = new Date(today);
        thirdDay.setDate(today.getDate() + 3);

        const nextThreeDaysForecast = data.list.filter(item => {
            const forecastDate = new Date(item.dt * 1000);
            return forecastDate.getDate() === tomorrow.getDate() ||
                forecastDate.getDate() === afterTomorrow.getDate() ||
                forecastDate.getDate() === thirdDay.getDate();
        });

        nextThreeDaysForecast.forEach(item => {
            const forecastDate = new Date(item.dt * 1000);
            let dayId;
            if (forecastDate.getDate() === tomorrow.getDate()) {
                dayId = 'day1';
            } else if (forecastDate.getDate() === afterTomorrow.getDate()) {
                dayId = 'day2';
            } else if (forecastDate.getDate() === thirdDay.getDate()) {
                dayId = 'day3';
            }

            const figureElement = document.getElementById(dayId);
            const tempForecast = figureElement.querySelector('.tempForecast');
            const forecastIcon = figureElement.querySelector('.forecastIcon');
            const forecastCaptionDesc = figureElement.querySelector('.forecastCaptionDesc');
            const dayName = figureElement.querySelector('.day');

            tempForecast.innerHTML = `${Math.round(item.main.temp)}&deg;C`;
            const iconsrc = `https://openweathermap.org/img/w/${item.weather[0].icon}.png`;
            const desc = item.weather[0].description;
            forecastIcon.setAttribute('src', iconsrc);
            forecastIcon.setAttribute('alt', desc);
            forecastCaptionDesc.textContent = ` ${capitalizeCaption(desc)}`;

            const options = { month: 'short', day: 'numeric' };
            dayName.innerHTML = forecastDate.toLocaleString('en-EN', options);
        });
    }
}

function capitalizeCaption(phrase) {
    let words = phrase.split(' '); //we separate the phrase in words by the space " "
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    } // we iterate through every element (words) and capitalized the 0 character.
    let capitalizedPhrase = words.join(" "); // then we put them all together

    return capitalizedPhrase
};

// const today = new Date();
// const tomorrow = new Date(today);
// tomorrow.setDate(today.getDate() + 1); //set tomorrow's date

// const options = { month: 'short', day: 'numeric' };
// const tomorrowString = tomorrow.toLocaleDateString('en-EN', options);

// console.log(tomorrowString);


// ------------------------ BANNER -------------------------

document.addEventListener("DOMContentLoaded", function() {
    var today = new Date();
    var dayOfWeek = today.getDay(); 
  
    if (dayOfWeek >= 1 && dayOfWeek <= 3) { // show mon, tue, wed
      document.getElementById("banner").classList.add("show");
    }
  
    document.getElementById("closeBtn").addEventListener("click", function() {
      document.getElementById("banner").classList.remove("show");
    });
  });
  