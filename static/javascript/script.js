////////////////////////////// Index Page

let plantCommonName;
let plantLatinName;
let waterInterval;
let lastWatered;
let imageUrl;

/////////// Plant Form

// Makes image overlay visible
function pic() {
    document.getElementById("image-overlay").style.display = "block";
}

// Sets imageUrl value from input, and hides image overlay
function addUserPic() {
    imageUrl = document.getElementById("image-url").value;
    document.getElementById("image-overlay").style.display = "none";
}

// Makes deletion-overlay visible
function scrap_question() {
    document.getElementById("delete-overlay").style.display = "block";
}

// Hides and errases plant form information
function scrap() {
    document.querySelector("#plant-form").classList.toggle("toggle");
    document.getElementById("delete-overlay").style.display = "none";
    clearInput();
}

// Hides delete-overlay
function keep_plant() {
    document.getElementById("delete-overlay").style.display = "none";
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
    } else {
        createDiv(lastWatered, imageUrl, waterInterval);
    }
}

// Submits user plant information and adds it to the html
function createDiv(lastWatered, imageUrl, waterInterval) {
    const newDiv = document.createElement("div");
    let date = new Date(lastWatered);
    let imgDiv = whichImage(imageUrl);
    let when = whenToWater(waterInterval, lastWatered);

    //Some of the following code was edited from Vadakkumpadath's code 
    //found on Stack Overflow. 
    //https://stackoverflow.com/questions/16270761/how-to-insert-a-large-block-of-html-in-javascript
    newDiv.setAttribute('class', 'user-plant-section');

    newDiv.innerHTML = `
        <div class="user-plant-divs">
            <div class="user-plant-image-section">
                ${imgDiv}
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
                    <p>Water every ${waterInterval} day(s)</p>
                </div>
                <div class="user-last-watered">
                    <p>Last watered on ${date.toLocaleDateString()}</p>
                </div>
                <div class="user-next-water">
                    <p>Needs to be watered on ${when}</p>
                </div>
            </div>
            <div class="user-edit">
                <button onclick="edit()">
                    <img src="../static/images/edit.webp" alt="Edit Button" id="edit-button">
                </button>
            </div>
            <div class="user-delete">
                <button onclick="scrap_question()">
                    <img src="../static/images/delete.webp" alt="Delete Button" id="delete-button">
                </button>
                <div class="user-submit hidden">
                    <button onclick="submit()">
                        <img src="../static/images/save.webp" alt="Submit Button" id="plant-submit-button">
                    </button>
                </div>
            </div>
        </div>
    `;
        
    document.getElementById("insert-here").appendChild(newDiv);
    scrap();
}

// Returns whether date selected is in the past or future
// Code taken and edited from https://www.codexworld.com/how-to/check-given-date-is-greater-than-today-javascript/
function isFutureDate(dateGiven) {
    var GivenDate = dateGiven;
    var CurrentDate = new Date();
    GivenDate = new Date(GivenDate);

    if(GivenDate > CurrentDate){
        return "future";
    }else{
        return "past";
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
        imgSection = `<img src="../static/images/no-image-found.webp" alt="Default Image" id="default-image"></img>`
    } else {
        imgSection = `<img src="${imageUrl}" alt="User Image of ${plantCommonName}" class="user-image"></img>`
    }

    return imgSection;
}

//Calculates when plant needs to be watered next
function whenToWater(interval, userDate) {
    //Code was edited from Stephen Wrighton's answer on Stack Overflow. https://stackoverflow.com/questions/1296358/how-to-subtract-days-from-a-plain-date
    let date = new Date(userDate);
    let num = Number(interval);
    date.setDate(date.getDate() + num);
    return date.toLocaleDateString();
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