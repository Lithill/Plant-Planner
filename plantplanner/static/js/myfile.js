///////////////////////////////////////// TooltipsnameField
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

///////////////////////////////////////// User Form Validation
 function registrationForm() {
    // Name vars
    let name = document.addUser.name.value; 
    const nameField = document.getElementById("name");
    const nameError = document.getElementById("name-error"); 
    const noName = "Please enter your name"; 
    // Username vars
    let username = document.addUser.username.value; 
    const usernameField = document.getElementById("username"); 
    const usernameError = document.getElementById("username-error"); 
    const noUsername = "Please enter your username"; 
    // Email vars
    let email = document.addUser.email.value; 
    const emailField = document.getElementById("email"); 
    const emailError = document.getElementById("email-error"); 
    const noEmail = "Please enter your email"; 
    // Password vars
    let password = document.addUser.password_hash.value; 
    const passwordField = document.getElementById("password_hash"); 
    const passwordError = document.getElementById("password-error"); 
    const noPassword = "Please enter your password"; 

    // Confirmation password vars (password2)
    let confPassword = document.addUser.password_hash2.value;
    const confPasswordField = document.getElementById("password_hash2"); 
    const confPasswordError = document.getElementById("password-error-2"); 
    const noConfPassword = "Please confirm your password"; 
    const passwordMatchErr = "Passwords must match"; 

    // Check if password
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
    let emailBlankBool = checkBlank(email, emailError, noEmail, emailField); //check if email field is blank
    let isEmailBool = validateEmail(email, emailError, emailField); 
    reset(emailBlankBool && isEmailBool, emailField, emailError); //if all these return fine, clear the warnings
}

///////////////////////////////////////// Login Form Validation

function loginForm() {
    // Username vars
    let username = document.login.username.value; 
    const usernameField = document.getElementById("username");
    const usernameError = document.getElementById("login-username-err"); 
    const noUsername = "Please enter your username"; 
    // Password vars
    let password = document.login.password.value; 
    const passwordField = document.getElementById("password"); 
    const passwordError = document.getElementById("login-password-err");
    const noPassword = "Please enter your password"; 

    // Check Username
    let usernameBlankBool = checkBlank(username, usernameError, noUsername, usernameField); //check if username field is blank
    reset(usernameBlankBool, usernameField, usernameError); //if all these return fine, clear the warnings

    // Check Password
    let passwordBlankBool = checkBlank(password, passwordError, noPassword, passwordField); //check if password field is blank
    reset(passwordBlankBool, passwordField, passwordError); //if all these return fine, clear the warnings
}

///////////////////////////////////////// Edit User Form Validation

function editUserForm() {
    // Name vars
    let name = document.editUser.name.value; 
    const nameField = document.getElementById("name"); 
    const nameError = document.getElementById("edit-name-error");
    const noName = "Please enter your name"; 
    // Username vars
    let username = document.editUser.username.value; 
    const usernameField = document.getElementById("username"); 
    const usernameError = document.getElementById("edit-username-error"); 
    const noUsername = "Please enter your username"; 
    // Email vars
    let email = document.editUser.email.value; 
    const emailField = document.getElementById("email"); 
    const emailError = document.getElementById("edit-email-error"); 
    const noEmail = "Please enter your email"; 

    // Check Email
    let emailBlankBool = checkBlank(email, emailError, noEmail, emailField); //check if email field is blank
    let isEmailBool = validateEmail(email, emailError, emailField); 
    reset(emailBlankBool && isEmailBool, emailField, emailError); //if all these return fine, clear the warnings

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
    let commonName = document.addPlant.common_name.value; 
    const common_name = document.getElementById("common_name");
    const commonNameError = document.getElementById("common-name-error"); 
    const noCommonName = "Please enter the common name of the plant";
    // Water Interval Vars
    let waterInterval = document.addPlant.water_interval.value; 
    const water_interval = document.getElementById("water_interval"); 
    const waterIntervalError = document.getElementById("water-interval-error"); 
    const noWaterInterval = "Please enter the number of days between watering";
    const wrongNumber = "Please enter a number between 1 and 182"; 
    // Last Watered Vars
    let lastWatered = document.addPlant.last_watered_date.value; 
    const last_watered_date = document.getElementById("last_watered_date"); 
    const lastWateredError = document.getElementById("last-watered-error"); 
    const noLastWatered = "Please enter the date you last watered the plant"; 
    const wrongDate = "Date cannot be in the future"; 

    // Check Common Name
    let commonNameBlankBool = checkBlank(commonName, commonNameError, noCommonName, common_name); //check if name field is blank
    reset(commonNameBlankBool, common_name, commonNameError); //if all these return fine, clear the warnings

    // Check Water Interval
    let waterIntervalBlankBool = checkBlank(waterInterval, waterIntervalError, noWaterInterval, water_interval); //check if name field is blank
    let rightRangeBool = range(wrongNumber, waterInterval, waterIntervalError, water_interval); //check if number is between 1 and 182
    reset(waterIntervalBlankBool && rightRangeBool, water_interval, waterIntervalError); //if all these return fine, clear the warnings

    // Check Last Watered
    let lastWateredBlankBool = checkBlank(lastWatered, lastWateredError, noLastWatered, last_watered_date); //check if name field is blank
    let dateBool = pastDateOnly(lastWatered, lastWateredError, wrongDate, last_watered_date); //add no-future-dates warning   
    reset(lastWateredBlankBool && dateBool, last_watered_date, lastWateredError); //if all these return fine, clear the warnings
}

///////////////////////////////////////// Edit Plant Form Validation

function editPlantForm() {
    // Common Name Vars
    let commonName = document.editPlant.common_name.value; 
    const common_name = document.getElementById("common_name"); 
    const commonNameError = document.getElementById("edit-common-name-error"); 
    const noCommonName = "Please enter the common name of the plant"; 
    // Water Interval Vars
    let waterInterval = document.editPlant.water_interval.value; 
    const water_interval = document.getElementById("water_interval"); 
    const waterIntervalError = document.getElementById("edit-water-interval-error"); 
    const noWaterInterval = "Please enter the number of days between watering"; 
    const wrongNumber = "Please enter a number between 1 and 182"; 
    // Last Watered Vars
    let lastWatered = document.editPlant.last_watered_date.value; 
    const last_watered_date = document.getElementById("last_watered_date"); 
    const lastWateredError = document.getElementById("edit-last-watered-error"); 
    const noLastWatered = "Please enter the date you last watered the plant"; 
    const wrongDate = "Date cannot be in the future"; 

    // Check Common Name
    let commonNameBlankBool = checkBlank(commonName, commonNameError, noCommonName, common_name); //check if name field is blank
    reset(commonNameBlankBool, common_name, commonNameError); //if all these return fine, clear the warnings

    // Check Water Interval
    let waterIntervalBlankBool = checkBlank(waterInterval, waterIntervalError, noWaterInterval, water_interval); //check if name field is blank
    let rightRangeBool = range(wrongNumber, waterInterval, waterIntervalError, water_interval); //check if number is between 1 and 182
    reset(waterIntervalBlankBool && rightRangeBool, water_interval, waterIntervalError); //if all these return fine, clear the warnings

    // Check Last Watered
    let lastWateredBlankBool = checkBlank(lastWatered, lastWateredError, noLastWatered, last_watered_date); //check if name field is blank
    let dateBool = pastDateOnly(lastWatered, lastWateredError, wrongDate, last_watered_date); //add no-future-dates warning   
    reset(lastWateredBlankBool && dateBool, last_watered_date, lastWateredError); //if all these return fine, clear the warnings
}

// Check if number is in the appropriate range
function range(wrongNoErr, string, stringError, stringField) {
    let number = Number(string);
    
    if (number == null) {
        return false;
    }

    if ((number > 0) && (number < 183)) {
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