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

    // Check Common Name
    let commonNameBlankBool = checkBlank(commonName, commonNameError, noCommonName, commonNameField); //check if name field is blank
    reset(commonNameBlankBool, commonNameField, commonNameError); //if all these return fine, clear the warnings
}

///////////////////////////////////////// Form Validation Functions

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