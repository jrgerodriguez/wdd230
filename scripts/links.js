const baseURL = "https://jrgerodriguez.github.io/wdd230/";
const linksURL = "https://jrgerodriguez.github.io/wdd230/data/links.json";

async function getLinksData() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
}

getLinksData();