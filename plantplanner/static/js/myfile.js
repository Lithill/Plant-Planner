///////////////////////////////////////// Tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

///////////////////////////////////////// User Form Validation
 function registrationForm() {
    // Name vars
    let name = document.addUser.name.value; //string
    const nameField = document.getElementById("nameField"); //stringField
    const nameError = document.getElementById("name-error"); //stringError
    const nameLength = 200; // stringLength - The maximum chars the string can be
    const noName = "Please enter your name"; //blankFieldErr
    const nameTooLong = `Name must be ${nameLength} characters or less`; //tooLongErr
    // Username vars
    let username = document.addUser.username.value; //string
    const usernameField = document.getElementById("usernameField"); //stringField
    const usernameError = document.getElementById("username-error"); //stringError
    const usernameLength = 20; // stringLength - The maximum chars the string can be
    const noUsername = "Please enter your username"; //blankFieldErr
    const usernameTooLong = `Username must be ${usernameLength} characters or less`; //tooLongErr
    // Email vars
    let email = document.addUser.email.value; //string
    const emailField = document.getElementById("emailField"); //stringField
    const emailError = document.getElementById("email-error"); //stringError
    const emailLength = 120; // stringLength - The maximum chars the string can be
    const noEmail = "Please enter your email"; //blankFieldErr
    const emailTooLong = `Email must be ${emailLength} characters or less`; //tooLongErr
    // Password vars
    let password = document.addUser.password_hash.value; //string
    const passwordField = document.getElementById("passwordHash"); //stringField
    const passwordError = document.getElementById("password-error"); //stringError
    const passwordLength = 128; // stringLength - The maximum chars the string can be
    const noPassword = "Please enter your password"; //blankFieldErr
    const passwordTooLong = `Password must be ${passwordLength} characters or less`; //tooLongErr
    // Confirmation password vars (password2)
    let confPassword = document.addUser.password_hash2.value;
    const confPasswordField = document.getElementById("passwordHash2"); //stringField
    const confPasswordError = document.getElementById("password-error-2"); //stringError
    const confPasswordLength = 128; //stringLength - The maximum chars the string can be
    const noConfPassword = "Please confirm your password"; //blankFieldErr
    const confPasswordTooLong = `Password must be ${confPasswordLength} characters or less`; //tooLongErr
    const passwordMatchErr = "Passwords must match"; //mustMatchErr

    // Check Password
    let passwordBlankBool = checkBlank(password, passwordError, noPassword, passwordField); //check if password field is blank
    let passwordLengthBool = checkLength(password, passwordLength, passwordError, passwordTooLong, passwordField); //check if password is too long
    let passwordsMatchBool = checkPasswordsMatch(password, confPassword, passwordMatchErr, passwordField, confPasswordError, confPasswordField, passwordError); // Check Passwords match 
    reset(passwordBlankBool && passwordLengthBool && passwordsMatchBool, passwordField, passwordError); //if all these return fine, clear the warnings
    
    // Check Password2
    let confPasswordBlankBool = checkBlank(confPassword, confPasswordError, noConfPassword, confPasswordField); //check if password field is blank
    let confPasswordLengthBool = checkLength(confPassword, confPasswordLength, confPasswordError, confPasswordTooLong, confPasswordField); //check if password is too long
    reset(confPasswordBlankBool && confPasswordLengthBool && passwordsMatchBool, confPasswordField, confPasswordError); //if all these return fine, clear the warnings

    // Check Name
    let nameBlankBool = checkBlank(name, nameError, noName, nameField); //check if name field is blank
    let nameLengthBool = checkLength(name, nameLength, nameError, nameTooLong, nameField); //check if name is too long
    reset(nameBlankBool && nameLengthBool, nameField, nameError); //if all these return fine, clear the warnings

    // Check Username
    let usernameBlankBool = checkBlank(username, usernameError, noUsername, usernameField); //check if username field is blank
    let usernameLengthBool = checkLength(username, usernameLength, usernameError, usernameTooLong, usernameField); //check if username is too long
    reset(usernameBlankBool && usernameLengthBool, usernameField, usernameError); //if all these return fine, clear the warnings

    // Check Email
    let emailBlankBool = checkBlank(email, emailError, noEmail, emailField) //check if email field is blank
    let emailLengthBool = checkLength( email, emailLength, emailError, emailTooLong, emailField) //check if email is too long
    let isEmailBool = validateEmail(email, emailError, emailField); 
    reset(emailBlankBool && emailLengthBool && isEmailBool, emailField, emailError) //if all these return fine, clear the warnings

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

// Check field length
function checkLength(string, stringLength, stringError, tooLongErr, stringField) {

    if (string.length > stringLength) {
        stringError.innerHTML = tooLongErr;
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