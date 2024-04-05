// ------------------------------------------- RENTALS PAGE ------------------------------------------------




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

// ------------------------ RENTALS INFO  -------------------------

const baseURL = "https://jrgerodriguez.github.io/wdd230/";
const rentalsURL = "https://jrgerodriguez.github.io/wdd230/final_website_project/data/data.json";

const rentalsSection = document.querySelector('#rentals')

async function getRentalsData() {
  const response = await fetch(rentalsURL);
  const data = await response.json();
  console.log(data);
  displayRentals(data);
}

const displayRentals = (rentals) => {
  let counter = 1;
  rentals.rentals.forEach((rental) => {

    // I create a section per type of rental which will have two columns
    let divElement = document.createElement('div');
    divElement.classList.add('rental-type-content');
    let newID = 'rental' + counter;
    divElement.id = newID;
    counter++;

    //Below is the structure of the first column, the type name and image
    let typeAndImageContainer = document.createElement('div');
    let rentalType = document.createElement('h3');
    let imageContainer = document.createElement('div');
    let rentalImage = document.createElement('img');
    rentalImage.src = rental.image;
    rentalImage.alt = `${rental.type} photo`;
    rentalImage.loading = 'lazy';
    let rentalPersons = document.createElement('p')

    // Below here is the structure of the second column
    let restOfInfoContainer = document.createElement('div');
    let table = document.createElement('table');
    //Table
    let tableRow1 = document.createElement('tr');

    let tableRow1Th1 = document.createElement('th')
    let tableRow1Th2 = document.createElement('th')

    let tableRow2 = document.createElement('tr');

    let tableRow2Th1 = document.createElement('td');
    let tableRow2Th2 = document.createElement('td');
    let tableRow2Th3 = document.createElement('td');
    let tableRow2Th4 = document.createElement('td');

    let tableRow3 = document.createElement('tr');

    let tableRow3Td1 = document.createElement('td');
    let tableRow3Td2 = document.createElement('td');
    let tableRow3Td3 = document.createElement('td');
    let tableRow3Td4 = document.createElement('td');

    // Here I assign the content every element will have 

    // 1st column
    imageContainer.appendChild(rentalImage);
    rentalType.textContent = rental.type;
    rentalPersons.textContent = `Max. Persons: ${rental.persons}`;
    typeAndImageContainer.appendChild(rentalType);
    typeAndImageContainer.appendChild(rentalPersons);
    typeAndImageContainer.appendChild(imageContainer);

    divElement.appendChild(typeAndImageContainer);

    // 2nd column
    //Table
    tableRow3Td1.textContent = rental.reservation[0].half;
    tableRow3Td2.textContent = rental.reservation[0].full;
    tableRow3Td3.textContent = rental.walkin[0].half;
    tableRow3Td4.textContent = rental.walkin[0].full;

    tableRow3.appendChild(tableRow3Td1);
    tableRow3.appendChild(tableRow3Td2);
    tableRow3.appendChild(tableRow3Td3);
    tableRow3.appendChild(tableRow3Td4);

    tableRow2Th1.innerHTML = 'Half Day<br>(3hrs)';
    tableRow2Th2.innerHTML = 'Full Day';
    tableRow2Th3.innerHTML = 'Half Day<br>(3hrs)';
    tableRow2Th4.innerHTML = 'Full Day';

    tableRow2.appendChild(tableRow2Th1);
    tableRow2.appendChild(tableRow2Th2);
    tableRow2.appendChild(tableRow2Th3);
    tableRow2.appendChild(tableRow2Th4);

    tableRow1Th1.textContent = 'Reservation';
    tableRow1Th2.textContent = 'Walk-In';
    tableRow1Th1.setAttribute('colspan', '2');
    tableRow1Th2.setAttribute('colspan', '2');

    tableRow1.appendChild(tableRow1Th1);
    tableRow1.appendChild(tableRow1Th2);

    table.appendChild(tableRow1);
    table.appendChild(tableRow2);
    table.appendChild(tableRow3);

    restOfInfoContainer.appendChild(table);

    divElement.appendChild(restOfInfoContainer);
    // Finally, I append everything into the container in the html file
    rentalsSection.appendChild(divElement);
  })
}

getRentalsData();

document.addEventListener('DOMContentLoaded', function () {
  // Obtener el parámetro de la URL
  const urlParams = new URLSearchParams(window.location.search);
  const rentalToShow = urlParams.get('rental');

  if (rentalToShow) {
      // Desplazarse automáticamente al elemento con el ID proporcionado
      const rentalElement = document.getElementById(rentalToShow);
      if (rentalElement) {
          rentalElement.scrollIntoView({ behavior: 'smooth' });
      }
  }
});