///////////////////////////////////////// Tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

///////////////////////////////////////// User Form Validation
 function registrationForm() {
    // Name vars
    let name = document.addUser.name.value; //string
    const nameField = document.getElementById("nameField"); //stringField
    const nameError = document.getElementById("name-error"); //stringError
    const noName = "Please enter your name"; //blankFieldErr
    // Username vars
    let username = document.addUser.username.value; //string
    const usernameField = document.getElementById("usernameField"); //stringField
    const usernameError = document.getElementById("username-error"); //stringError
    const noUsername = "Please enter your username"; //blankFieldErr
    // Email vars
    let email = document.addUser.email.value; //string
    const emailField = document.getElementById("emailField"); //stringField
    const emailError = document.getElementById("email-error"); //stringError
    const noEmail = "Please enter your email"; //blankFieldErr
    // Password vars
    let password = document.addUser.password_hash.value; //string
    const passwordField = document.getElementById("passwordHash"); //stringField
    const passwordError = document.getElementById("password-error"); //stringError
    const noPassword = "Please enter your password"; //blankFieldErr

    // Confirmation password vars (password2)
    let confPassword = document.addUser.password_hash2.value;
    const confPasswordField = document.getElementById("passwordHash2"); //stringField
    const confPasswordError = document.getElementById("password-error-2"); //stringError
    const noConfPassword = "Please confirm your password"; //blankFieldErr
    const passwordMatchErr = "Passwords must match"; //mustMatchErr

    // Check Password
    let passwordBlankBool = checkBlank(password, passwordError, noPassword, passwordField); //check if password field is blank
    let passwordsMatchBool = checkPasswordsMatch(password, confPassword, passwordMatchErr, passwordField, confPasswordError, confPasswordField, passwordError); // Check Passwords match 
    reset(passwordBlankBool && passwordsMatchBool, passwordField, passwordError); //if all these return fine, clear the warnings
    
    // Check Password2
    let confPasswordBlankBool = checkBlank(confPassword, confPasswordError, noConfPassword, confPasswordField); //check if password field is blank
    reset(confPasswordBlankBool && passwordsMatchBool, confPasswordField, confPasswordError); //if all these return fine, clear the warnings

    // Check Name
    let nameBlankBool = checkBlank(name, nameError, noName, nameField); //check if name field is blank
    reset(nameBlankBool, nameField, nameError); //if all these return fine, clear the warnings

    // Check Username
    let usernameBlankBool = checkBlank(username, usernameError, noUsername, usernameField); //check if username field is blank
    reset(usernameBlankBool, usernameField, usernameError); //if all these return fine, clear the warnings

    // Check Email
    let emailBlankBool = checkBlank(email, emailError, noEmail, emailField) //check if email field is blank
    let isEmailBool = validateEmail(email, emailError, emailField); 
    reset(emailBlankBool && isEmailBool, emailField, emailError) //if all these return fine, clear the warnings
}

///////////////////////////////////////// Edit User Form Validation

function editUserForm() {
    // Name vars
    let name = document.editUser.name.value; //string
    const nameField = document.getElementById("editNameField"); //stringField
    const nameError = document.getElementById("edit-name-error"); //stringError
    const noName = "Please enter your name"; //blankFieldErr
    // Username vars
    let username = document.editUser.username.value; //string
    const usernameField = document.getElementById("editUsernameField"); //stringField
    const usernameError = document.getElementById("edit-username-error"); //stringError
    const noUsername = "Please enter your username"; //blankFieldErr
    // Email vars
    let email = document.editUser.email.value; //string
    const emailField = document.getElementById("editEmailField"); //stringField
    const emailError = document.getElementById("edit-email-error"); //stringError
    const noEmail = "Please enter your email"; //blankFieldErr

    // Check Email
    let emailBlankBool = checkBlank(email, emailError, noEmail, emailField) //check if email field is blank
    let isEmailBool = validateEmail(email, emailError, emailField); 
    reset(emailBlankBool && isEmailBool, emailField, emailError) //if all these return fine, clear the warnings

    // Check Name
    let nameBlankBool = checkBlank(name, nameError, noName, nameField); //check if name field is blank
    reset(nameBlankBool, nameField, nameError); //if all these return fine, clear the warnings

    // Check Username
    let usernameBlankBool = checkBlank(username, usernameError, noUsername, usernameField); //check if username field is blank
    reset(usernameBlankBool, usernameField, usernameError); //if all these return fine, clear the warnings
}

///////////////////////////////////////// Add Plant Form Validation

function addPlantForm() {
    // Common Name Vars
    let commonName = document.addPlant.name.value; //string
    const commonNameField = document.getElementById("commonNameField"); //stringField
    const commonNameError = document.getElementById("common-name-error"); //stringError
    const noCommonName = "Please enter the common name of the plant"; //blankFieldErr
    // Water Interval Vars
    let waterInterval = document.addPlant.water_interval.value; //integer or string, (but goes into "string" field in check function)
    const waterIntervalField = document.getElementById("waterIntervalField"); //stringField
    const waterIntervalError = document.getElementById("water-interval-error"); //stringError
    const noWaterInterval = "Please enter the number of days between watering"; //blankFieldErr
    const wrongNumber = "Please enter a number between 1 and 182"; //wrongNoErr 
    // Last Watered Vars
    let lastWatered = document.addPlant.last_watered_date.value; //integer (but goes into "string" field in check function)
    const lastWateredField = document.getElementById("lastWateredField"); //stringField
    const lastWateredError = document.getElementById("last-watered-error"); //stringError
    const noLastWatered = "Please enter the date you last watered the plant"; //blankFieldErr
    const wrongDate = "Date cannot be in the future"; //errMessage

    // Check Common Name
    let commonNameBlankBool = checkBlank(commonName, commonNameError, noCommonName, commonNameField); //check if name field is blank
    reset(commonNameBlankBool, commonNameField, commonNameError); //if all these return fine, clear the warnings

    // Check Water Interval
    let waterIntervalBlankBool = checkBlank(waterInterval, waterIntervalError, noWaterInterval, waterIntervalField); //check if name field is blank
    let rightRangeBool = range(wrongNumber, waterInterval, waterIntervalError, waterIntervalField); //check if number is between 1 and 182
    reset(waterIntervalBlankBool && rightRangeBool, waterIntervalField, waterIntervalError); //if all these return fine, clear the warnings

    // Check Last Watered
    let lastWateredBlankBool = checkBlank(lastWatered, lastWateredError, noLastWatered, lastWateredField); //check if name field is blank
    let dateBool = pastDateOnly(lastWatered, lastWateredError, wrongDate, lastWateredField); //add no-future-dates warning   
    reset(lastWateredBlankBool && dateBool, lastWateredField, lastWateredError); //if all these return fine, clear the warnings
}

///////////////////////////////////////// Edit Plant Form Validation

function editPlantForm() {
    // Common Name Vars
    let commonName = document.editPlant.name.value; //string
    const commonNameField = document.getElementById("editCommonNameField"); //stringField
    const commonNameError = document.getElementById("edit-common-name-error"); //stringError
    const noCommonName = "Please enter the common name of the plant"; //blankFieldErr
    // Water Interval Vars
    let waterInterval = document.editPlant.water_interval.value; //integer (but goes into "string" field in check function)
    const waterIntervalField = document.getElementById("editWaterIntervalField"); //stringField
    const waterIntervalError = document.getElementById("edit-water-interval-error"); //stringError
    const noWaterInterval = "Please enter the number of days between watering"; //blankFieldErr
    const wrongNumber = "Please enter a number between 1 and 182"; //wrongNoErr 
    // Last Watered Vars
    let lastWatered = document.editPlant.last_watered_date.value; //integer (but goes into "string" field in check function)
    const lastWateredField = document.getElementById("editLastWateredField"); //stringField
    const lastWateredError = document.getElementById("edit-last-watered-error"); //stringError
    const noLastWatered = "Please enter the date you last watered the plant"; //blankFieldErr
    const wrongDate = "Date cannot be in the future"; //errMessage

    // Check Common Name
    let commonNameBlankBool = checkBlank(commonName, commonNameError, noCommonName, commonNameField); //check if name field is blank
    reset(commonNameBlankBool, commonNameField, commonNameError); //if all these return fine, clear the warnings

    // Check Water Interval
    let waterIntervalBlankBool = checkBlank(waterInterval, waterIntervalError, noWaterInterval, waterIntervalField); //check if name field is blank
    let rightRangeBool = range(wrongNumber, waterInterval, waterIntervalError, waterIntervalField); //check if number is between 1 and 182
    reset(waterIntervalBlankBool && rightRangeBool, waterIntervalField, waterIntervalError); //if all these return fine, clear the warnings

    // Check Last Watered
    let lastWateredBlankBool = checkBlank(lastWatered, lastWateredError, noLastWatered, lastWateredField); //check if name field is blank
    let dateBool = pastDateOnly(lastWatered, lastWateredError, wrongDate, lastWateredField); //add no-future-dates warning   
    reset(lastWateredBlankBool && dateBool, lastWateredField, lastWateredError); //if all these return fine, clear the warnings
}

function range(wrongNoErr, string, stringError, stringField) {
    if ((Number(string) > 0) && (Number(string) < 183)) {
        return true;
    } else {
        stringError.innerHTML = wrongNoErr;
        stringField.style.borderColor="#cc0000";
        return false;
    }
}

///////////////////////////////////////// General Form Validation Functions

// Check if field is blank
function checkBlank(string, stringError, blankFieldErr, stringField) {

    if (string==null || string=="") { 
        stringError.innerHTML = blankFieldErr;
        stringField.style.borderColor="#cc0000";
        return false; 
    } else {
        return true;
    }
}

// Reset form fields
function reset(bool, stringField, stringError) {

    if (bool) {
        stringField.style.borderColor="#e2e5e9";
        stringError.innerHTML = "";
    }
}

// Check if user has written a valid email address
// Adapted from https://www.w3schools.blog/email-validation-javascript-js
function validateEmail(string, stringError, stringField) {
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (string.match(mailformat)) {
        return true;
    } else {
        stringError.innerHTML = "Please enter a valid email address";
        stringField.style.borderColor="#cc0000";
        return false;
    }
}

// Get today's date
function today() {
    // Taken from https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    return today;
}

// Check if date selected is in the past
function pastDateOnly(date, stringError, errMessage, stringField) {

    let dateToday = String(today());
    dateToday = dateToday.replace('-', '');
    dateToday = dateToday.replace('-', '');

    date = String(date);
    date = date.replace('-', '');
    date = date.replace('-', '');

    if (date > dateToday) {
        stringError.innerHTML = errMessage;
        stringField.style.borderColor="#cc0000";
        return false;
    } else {
        return true;
    }
}

// Check if passwords match. If not, show user the error
function checkPasswordsMatch(string1, string2, mustMatchErr, stringField1, stringError2, stringField2, stringError1) {

    if (string1 == string2) {
        return true;
    } else {
        stringError1.innerHTML = mustMatchErr;
        stringField1.style.borderColor="#cc0000";
        stringError2.innerHTML = mustMatchErr;
        stringField2.style.borderColor="#cc0000";
        return false;
    }
}