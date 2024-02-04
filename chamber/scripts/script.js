// Last Modified

let lastModif = new Date(document.lastModified);
let dateString = new Date(lastModif).toLocaleString();
document.querySelector('#lastModified').textContent = `Last update on ${dateString}`;

// Hamburger menu

const menuBtn = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuBtn.addEventListener('click', () => {
	navigation.classList.toggle('open');
	menuBtn.classList.toggle('open');
});