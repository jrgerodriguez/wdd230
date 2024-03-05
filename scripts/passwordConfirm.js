// Confirm same password

const password1 = document.querySelector("#password");
const password2 = document.querySelector("#confirm-password");
const message = document.querySelector("#confirm-password-message");

password2.addEventListener("focusout", checkSame);

function checkSame() {
    if (password1.value !== password2.value) {
        showMessage("PASSWORDS DON'T MATCH, PLEASE CONFIRM THE SAME PASSWORD", "red");
        
    } else {
        hideMessage();
    }
}

function showMessage(msg, color) {
    message.textContent = msg;
    message.style.visibility = "visible";
    message.style.color = color;
    message.style.fontWeight = "bold";
    password2.style.backgroundColor = "#eee";
    password2.value = "";
    password1.value = "";
    password1.focus();
}

function hideMessage() {
    message.style.visibility = "hidden";
    password2.style.color = "#000";
    
}

// Range

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("range");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}



// Hamburger menu

const menuBtn = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuBtn.addEventListener('click', () => {
	navigation.classList.toggle('open');
	menuBtn.classList.toggle('open');
});