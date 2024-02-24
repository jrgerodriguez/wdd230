// Last Modified

let lastModif = new Date(document.lastModified);
let dateString = new Date(lastModif).toLocaleString();
document.querySelector('#lastModified').textContent = `Last Modification: ${dateString}`;