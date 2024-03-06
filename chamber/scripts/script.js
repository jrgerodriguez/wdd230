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

// Dark Mode Switch

const switchInput = document.querySelector('#switch-input');
const body = document.querySelector('body');
const paragraph = document.querySelectorAll('.paragraph');
const eventsButton = document.querySelector('.current-events__button');
const membershipContent = document.querySelectorAll('.membership-content');

switchInput.addEventListener('change', () => {
	if (switchInput.checked) {
		body.style.backgroundColor = 'black';
		body.style.color = 'white';
		membershipContent.forEach(element => {
			element.style.color = 'black';
		})
		paragraph.forEach(para => {
			para.style.color = 'white';
		})
		eventsButton.style.backgroundColor = 'white';
		eventsButton.style.color = 'black';

		eventsButton.addEventListener('mouseenter', () => {
			eventsButton.style.backgroundColor = 'black';
			eventsButton.style.color = 'white';
			eventsButton.style.borderColor = 'white';
		});

		eventsButton.addEventListener('mouseleave', () => {
			eventsButton.style.backgroundColor = 'white';
			eventsButton.style.color = 'black';
			eventsButton.style.borderColor = 'black';
		});

	} else {
		body.style.backgroundColor = 'white';
		body.style.color = 'black';
		paragraph.forEach(para => {
			para.style.color = 'black';
		})
		eventsButton.style.backgroundColor = 'black';
		eventsButton.style.color = 'white';


		eventsButton.addEventListener('mouseenter', () => {
			eventsButton.style.backgroundColor = 'white';
			eventsButton.style.color = 'black';
			eventsButton.style.borderColor = 'black';
		});

		eventsButton.addEventListener('mouseleave', () => {
			eventsButton.style.backgroundColor = 'black';
			eventsButton.style.color = 'white';
			eventsButton.style.borderColor = 'white';
		});
	}
});

// Message based on number of visits

const visitsMessageDisplay = document.getElementById('visits-message-display');
const milsInOneDay = 24 * 60 * 60 * 1000;

let lastVisitDate = localStorage.getItem('lastVisitDate');

if (!lastVisitDate) {
	visitsMessageDisplay.textContent = 'Welcome! Let us know if you have any questions.';
} else {
	let lastVisit = new Date(lastVisitDate);
	let newVisitDate = new Date();
	let timeDifference = newVisitDate.getTime() - lastVisit.getTime();

	if (timeDifference < milsInOneDay) {
		visitsMessageDisplay.textContent = 'Back so soon! Awesome!';
	} else if (timeDifference > milsInOneDay) {
		let numberOfDays = (timeDifference / (1000 * 60 * 60 * 24)).toFixed(0);
		visitsMessageDisplay.textContent = `You last visited ${numberOfDays} days ago.`;
	}
}

localStorage.setItem('lastVisitDate', new Date().toISOString());



// let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
// numVisits++;
// localStorage.setItem("numVisits-ls", numVisits);

// console.log(numVisits);
