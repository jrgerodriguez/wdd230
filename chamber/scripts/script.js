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

switchInput.addEventListener('change', () => {
	if (switchInput.checked) {
		body.style.backgroundColor = 'black';
		body.style.color = 'white';
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