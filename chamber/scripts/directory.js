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
        let name = document.createElement('h3');
        let address = document.createElement('p');
        let url = document.createElement('p');
        let membership = document.createElement('p');

        img.src = member.image;
        name.textContent = member.name;
        address.textContent = member.address;
        url.textContent = member.url;
        membership.textContent = `Memberhip Type: ${member.membership}`;

        section.appendChild(img);
        section.appendChild(name);
        section.appendChild(address);
        section.appendChild(url);
        section.appendChild(membership);

        display.appendChild(section);

    })
}

getMembersData();
