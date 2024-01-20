// Current Year

const currentYear = {
    year: "numeric"
};

document.querySelector('#currentyear').innerHTML = new Date().toLocaleDateString("en-US", currentYear);

// Last Modified

let lastModif = new Date(document.lastModified);
let dateString = new Date(lastModif).toLocaleString();
document.querySelector('#lastModified').textContent = `Last Updated: ${dateString}`;