////////////////////////////// Index Page

let plantCommonName;
let plantLatinName;
let waterInterval;
let lastWatered;

/////////// Plant Form

// Edits plant image
function pic() {
    alert("Do you want to add an image?");
}

// Makes deletion overlay visible
function scrap_question() {
    document.getElementById("delete-overlay").style.display = "block";
}

// Hides and errases plant form information
function scrap() {
    document.querySelector("#plant-form").classList.toggle("toggle");
    document.getElementById("delete-overlay").style.display = "none";
}

// Hides delete overlay
function keep_plant() {
    document.getElementById("delete-overlay").style.display = "none";
}

// Submits user plant information and adds it to the html
function submit() {
    plantCommonName = document.getElementById("common-name").value;
    plantLatinName = document.getElementById("latin-name").value;
    waterInterval = document.getElementById("water-interval").value;
    lastWatered = document.getElementById("last-watered").value;
    alert(`Do you want to save the details for ${plantCommonName} (${plantLatinName})? Its water interval is ${waterInterval} and you last watered it on ${lastWatered}`);
}

// Toggles visibility of plant form
function addButton() {
    document.querySelector("#plant-form").classList.toggle("toggle");
}

/////////// Added Plants

// Edits plant
function edit() {
    alert("Do you want to edit this plant?");
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