const baseURL = "https://jrgerodriguez.github.io/wdd230/";
const membersURL = "https://jrgerodriguez.github.io/wdd230/chamber/data/members.json";

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

async function getMembersData() {
    const response = await fetch(membersURL);
    const data = await response.json();
    // displayLinks(data);
    console.table(data)
}

