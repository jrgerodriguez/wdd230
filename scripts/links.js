const baseURL = "https://jrgerodriguez.github.io/wdd230/";
const linksURL = "https://jrgerodriguez.github.io/wdd230/data/links.json";

const ulElement = document.querySelector('#links-list');

async function getLinksData() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

const displayLinks = (weeks) => {
    weeks.lessons.forEach((week) => {
        let liElement = document.createElement('li');

        liElement.textContent = `${week.lesson}: `;

        week.links.forEach((link) => {
            let aElement = document.createElement('a');
            aElement.href = link.url;
            aElement.textContent = link.title;
            aElement.target = '_blank';
            liElement.appendChild(aElement);
            liElement.appendChild(document.createTextNode(' | '));
        })

        if (liElement.lastChild.nodeValue === ' | ') {
            liElement.removeChild(liElement.lastChild);
        }


        ulElement.appendChild(liElement);
    });
}

getLinksData();