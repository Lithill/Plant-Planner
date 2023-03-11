////////////////////////////// Index Page

let plantCommonName;
let plantLatinName;
let waterInterval;
let lastWatered;
let imageUrl;

//Code below is a spliced version of 
//https://www.daterangepicker.com/'s Single Date Picker, and 
//Giusy Martin's code on Stack Overflow at
//https://stackoverflow.com/questions/37138775/how-to-disable-future-dates-in-daterangepicker#:~:text=daterangepicker(%7B%20autoUpdateInput%3A%20false%2C%20locale,%2DMM%2DYY'%20%7D%20%7D)%3B
$('input[name="last-watered"]').daterangepicker({
    singleDatePicker: true,
    maxDate: new Date(),
    locale: {
        format: 'DD/MM/YY'
    }
})

/////////// Plant Form

// Edits plant image
function pic() {
    document.getElementById("image-overlay").style.display = "block";
}

function addUserPic() {
    imageUrl = document.getElementById("image-url").value;
    document.getElementById("image-overlay").style.display = "none";
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
    const newDiv = document.createElement("div");

    let date = new Date(lastWatered);

    //Some of the following code was edited from Vadakkumpadath's code 
    //found on Stack Overflow. 
    //https://stackoverflow.com/questions/16270761/how-to-insert-a-large-block-of-html-in-javascript
    newDiv.setAttribute('class', 'user-plant-section');
      
    let imgDiv = whichImage(imageUrl);
    let when = whenToWater(waterInterval, lastWatered);

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

//Picks whether to use a default image or user inputed image
function whichImage(urlVar) {
    let imgSection;

    if (urlVar === undefined) {
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