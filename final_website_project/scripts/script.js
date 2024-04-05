// ------------------------------------------- HOME PAGE ------------------------------------------------




// ------------------------ MENU SCREEN -------------------------

document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('#menu');
  const navigation = document.querySelector('.nav__pages__links');

  let isOpen = false;

  menuBtn.addEventListener('click', function () {
    isOpen = !isOpen;
    navigation.classList.toggle('open');
    menuBtn.classList.toggle('open');

    if (isOpen) {
      menuBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="35" height="35" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M18 6l-12 12" />
          <path d="M6 6l12 12" />
        </svg>`;
    } else {
      menuBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="35"
        height="35" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none"
        stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 6l16 0" />
        <path d="M4 12l16 0" />
        <path d="M4 18l16 0" />
      </svg>`;
    }
  });
});

// ------------------------ WEATHER SECTION -------------------------

// ------------------------ TEMPERATURE -------------------------

const temperature = document.querySelector('#temperature');
const tempIcon = document.querySelector('#temp-icon');
const tempCaptionDesc = document.querySelector('#temp-figcaption');
const tempMain = document.querySelector('#temp-main');

const humidity = document.querySelector('#humidity');

const maxTemp = document.querySelector('#temp-max');

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
  temperature.innerHTML = `${Math.round(data.main.temp)}&deg;C`;
  tempMain.textContent = `${data.weather[0].main}`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  tempIcon.setAttribute('src', iconsrc);
  tempIcon.setAttribute('alt', desc);
  tempCaptionDesc.textContent = `${capitalizeCaption(desc)}`;

  humidity.innerHTML = `${data.main.humidity}%`;

  maxTemp.innerHTML = `${Math.round(data.main.temp_max)}&deg;C`;
}

function capitalizeCaption(phrase) {
  let words = phrase.split(' '); //we separate the phrase in words by the space " "
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  } // we iterate through every element (words) and capitalized the 0 character.
  let capitalizedPhrase = words.join(" "); // then we put them all together

  return capitalizedPhrase
};

// ------------------------ Next Day 3 pm -------------------------

const temperatureNext = document.querySelector('#temperature-next');
const iconNext = document.querySelector('#icon-next');
const captionDescNext = document.querySelector('#figcaption-next');
const MainNext = document.querySelector('#main-next');

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
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(9, 0, 0, 0);
  const tomorrowUnixTimestamp = Math.floor(tomorrow.getTime() / 1000);

  const forecast = data.list.find(item => item.dt === tomorrowUnixTimestamp);

  temperatureNext.innerHTML = `${Math.round(forecast.main.temp)}&deg;C`;
  MainNext.textContent = `${forecast.weather[0].main}`;
  const forecastIcon = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
  let forecastDesc = forecast.weather[0].description;
  iconNext.setAttribute('src', forecastIcon);
  iconNext.setAttribute('alt', forecastDesc);
  captionDescNext.textContent = `${capitalizeCaption(forecastDesc)}`;
}

// ------------------------ BANNER -------------------------

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("banner").classList.add("show");
  
  document.getElementById("closeBtn").addEventListener("click", function () {
    document.getElementById("banner").classList.remove("show");
  });
});