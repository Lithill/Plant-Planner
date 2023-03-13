////////////////////////////// Index Page

let plantCommonName;
let plantLatinName;
let waterInterval;
let lastWatered;
let imageUrl;

document.getElementById("dim").style.display = "none";

/////////// Plant Form

// Makes image overlay visible
function pic() {
    document.getElementById("image-overlay").style.display = "block";
    dim();
}

// Adds user pic if given, hides image overlay
function addUserPic() {
    imageUrl = document.getElementById("image-url").value;
    document.getElementById("image-overlay").style.display = "none";
    undim();
    document.getElementById("plant-image").src=`${whichImage(imageUrl)}`;
}

// Makes deletion-overlay visible
function scrap_question() {
    document.getElementById("delete-form-overlay").style.display = "block";
    dim();
}

// Hides and errases plant form information
function scrapPlantForm() {
    document.querySelector("#plant-form").classList.toggle("toggle");
    document.getElementById("delete-form-overlay").style.display = "none";
    undim();
    clearInput();
}

// Hides delete-form-overlay
function keepFormPlant() {
    document.getElementById("delete-form-overlay").style.display = "none";
    undim();
}

// Verifies the user plant information and then  
// calls a function that will add it to a new div
function submit() {
    plantCommonName = document.getElementById("common-name").value;
    plantLatinName = document.getElementById("latin-name").value;
    waterInterval = document.getElementById("water-interval").value;
    lastWatered = document.getElementById("last-watered").value;
    let userDate = (isFutureDate(lastWatered));
   
    if (userDate === "future") {
        alert('Please do not choose a date in the future');
    } else if (plantCommonName.length === 0) {
        alert("Please enter the plant's common name");
    } else if (plantLatinName.length === 0) {
        alert("Please enter the plant's latin name");
    } else if (lastWatered.length === 0) {
        alert("Please enter a date");
    } else {
        createDiv(lastWatered, imageUrl, waterInterval);
    }
}

function pickAlt(urlVar, string) {
    let alt;

    if ((urlVar === undefined) || (urlVar.length === 0)) {
        alt = "Default Image";
    } else {
        alt = `User Image of ${string}`;
    }

    return alt;
}

// Submits user plant information and adds it to the html
function createDiv(lastWatered, imageUrl, waterInterval) {
    const newDiv = document.createElement("div");
    let date = new Date(lastWatered);

    //Some of the following code was edited from Vadakkumpadath's code 
    //found on Stack Overflow. 
    //https://stackoverflow.com/questions/16270761/how-to-insert-a-large-block-of-html-in-javascript
    newDiv.setAttribute('class', 'user-plant-section');

    newDiv.innerHTML = `
        <div class="user-plant-divs">
            <div class="user-plant-image-section">
            <img src="${whichImage(imageUrl)}" alt="${pickAlt(imageUrl, plantCommonName)}" id="default-image"></img>
            </div>
            <div class="user-plant-name">
                <div class="user-common-name">
                    <h2>${plantCommonName}</h2>
                </div>
                <div class="user-latin-name">
                    <h3>(${plantLatinName})</h3>
                </div>
            </div>
            <div class="user-main-info">
                <div class="user-water-interval">
                    <p>${waterIntervalText(waterInterval)}</p>
                </div>
                <div class="user-last-watered">
                    <p>Last watered on ${date.toLocaleDateString()}</p>
                </div>
                <div class="user-next-water">
                    <p>${chooseWaterText(waterInterval, lastWatered)}</p>
                </div>
            </div>
            <div class="user-edit">
                <button onclick="edit()" id="edit-button">
                    <img src="../static/images/edit.webp" alt="Edit Button" id="edit-button-pic">
                </button>
            </div>
            <div class="user-delete">
                <button onclick="deletePlant()" id="delete-button">
                    <img src="../static/images/delete.webp" alt="Delete Button" id="delete-button-pic">
                </button>
                <div class="user-submit hidden">
                    <button onclick="submit()" id="plant-submit-button">
                        <img src="../static/images/save.webp" alt="Submit Button" id="plant-submit-button-pic">
                    </button>
                </div>
            </div>
        </div>
    `;
        
    document.getElementById("insert-here").appendChild(newDiv);
    scrapPlantForm();
}

// Returns appropriate text depending on water interval
function waterIntervalText(intOrString) {
    if (Number(intOrString) === 1) {
        return "Water every day";
    } else {
        return `Water every ${intOrString} days`;
    }
}

// Delete user plant
function deletePlant() {
    alert('You are trying to delete a plant');
}

// Returns whether plant needed to be watered in the past,
// needs to be watered today,
//or should be watered in the future
function chooseWaterText(int, string) {
    let when = whenToWater(int, string);

    if ((isFutureDate(when)) === "past") {
        return `Overdue! Needed water since ${when.toLocaleDateString()}`;
    } else if ((isFutureDate(when)) === "future") {
        return `Needs to be watered ${when.toLocaleDateString()}`;
    } else {
        return 'Needs to be watered today';
    }
}

// Returns whether date selected is in the past or future
// Code taken and edited from https://www.codexworld.com/how-to/check-given-date-is-greater-than-today-javascript/
function isFutureDate(dateGiven) {
    var GivenDate = dateGiven;
    var CurrentDate = new Date();
    GivenDate = new Date(GivenDate);

    if (GivenDate > CurrentDate) {
        return "future";
    } else if (GivenDate < CurrentDate.setHours(0,0,0,0)) {
        return "past";
    } else {
        return "present";
    }
}

// Clears input fields apart from water-interval, which resets
function clearInput(){
    inputArray = [
        document.getElementById("image-url"), 
        document.getElementById("common-name"), 
        document.getElementById("latin-name"), 
        document.getElementById("last-watered") 
    ];
    
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].value !="") {
            inputArray[i].value = "";
        }
    }

    document.getElementById("water-interval").value = 1;
}

//Picks whether to use a default image or user inputed image
function whichImage(urlVar) {
    let imgSection;

    if ((urlVar === undefined) || (urlVar.length === 0)) {
        imgSection = "../static/images/no-image-found.webp";
    } else {
        imgSection = `${imageUrl}`;
    }

    return imgSection;
}

//Calculates when plant needs to be watered next
function whenToWater(interval, userDate) {
    //Code was edited from Stephen Wrighton's answer on Stack Overflow. https://stackoverflow.com/questions/1296358/how-to-subtract-days-from-a-plain-date
    let date = new Date(userDate);
    let num = Number(interval);
    date.setDate(date.getDate() + num);
    return date;
}

// Toggles visibility of plant form
function addButton() {
    document.querySelector("#plant-form").classList.toggle("toggle");
}

// Dims the background and disables inappropriate buttons
function dim() {
    document.getElementById("dim").style.display = "block";
    document.querySelector("#pic-button").disabled = true;
    document.querySelector("#pic-button").disabled = true;
    document.querySelector("#edit-button").disabled = true;
    document.querySelector("#delete-button").disabled = true;
    document.querySelector("#plant-submit-button").disabled = true;
    document.querySelector("#add-button").disabled = true;
}

// Undims the background
function undim() {
    document.getElementById("dim").style.display = "none";
    document.querySelector("#pic-button").disabled = false;
    document.querySelector("#pic-button").disabled = false;
    document.querySelector("#edit-button").disabled = false;
    document.querySelector("#delete-button").disabled = false;
    document.querySelector("#plant-submit-button").disabled = false;
    document.querySelector("#add-button").disabled = false;
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