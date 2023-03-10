////////////////////////////// Index Page

let plantCommonName;
let plantLatinName;
let waterInterval;
let lastWatered;

function pic() {
    alert("Do you want to add an image?");
}

function edit() {
    alert("Do you want to edit this plant?");
}

function scrap_question() {
    console.log("scrap question got hit")
    document.getElementById("delete-overlay").style.display = "block";
}

function scrap() {
    document.querySelector("#plant-form").classList.toggle("toggle");
    document.getElementById("delete-overlay").style.display = "none";
}

function keep_plant() {
    document.getElementById("delete-overlay").style.display = "none";
}

function submit() {
    plantCommonName = document.getElementById("common-name").value;
    plantLatinName = document.getElementById("latin-name").value;
    waterInterval = document.getElementById("water-interval").value;
    lastWatered = document.getElementById("last-watered").value;
    alert(`Do you want to save the details for ${plantCommonName} (${plantLatinName})? Its water interval is ${waterInterval} and you last watered it on ${lastWatered}`);
}

function addButton() {
    document.querySelector("#plant-form").classList.toggle("toggle");
}

////////////////////////////// Login Page

function newUser() {
    alert("You are a new user");
}

function forgotPassword() {
    alert("You forgot your password");
}

function loginSubmit() {
    alert("You are trying to submit this form");
}