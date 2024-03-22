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


// Display Directory Members

const baseURL = "https://jrgerodriguez.github.io/wdd230/";
const membersURL = "https://jrgerodriguez.github.io/wdd230/chamber/data/members.json";

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

async function getMembersData() {
    const response = await fetch(membersURL);
    const data = await response.json();
    displayMembers(data);
}

const displayMembers = (members) => {
    members.members.forEach((member) => {
        let section = document.createElement('section');
        let img = document.createElement('img');
        let name = document.createElement('h4');
        let address = document.createElement('p');
        let url = document.createElement('p');
        let membership = document.createElement('p');

        img.src = member.image;
        name.textContent = member.name;
        address.textContent = member.address;
        url.textContent = member.url;
        membership.textContent = `Membership Type: ${member.membership}`;

        section.appendChild(img);
        section.appendChild(name);
        section.appendChild(address);
        section.appendChild(url);
        section.appendChild(membership);

        display.appendChild(section);
    });
}

getMembersData();


gridbutton.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}


//Dark Mode

const switchInput = document.querySelector('#switch-input');
const body = document.querySelector('body');
const directoryMain = document.querySelector('.directory-main');

switchInput.addEventListener('change', () => {
    if (switchInput.checked) {
        body.style.backgroundColor = 'black';
        directoryMain.style.color = 'black';
    } else {
        body.style.backgroundColor = 'white';
        directoryMain.style.color = 'black';
    }
});


