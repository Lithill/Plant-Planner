///////////////////////////////////////// Tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

///////////////////////////////////////// User Form Validation
function validateform() {
    let name = document.addUser.name.value;  
    let username = document.addUser.username.value;
    let email = document.addUser.email.value;
    let password_hash = document.addUser.password_hash.value;
    let password_hash2 = document.addUser.password_hash2.value;

    checkName(name);
    checkUsername(username);
    checkEmail(email);
    checkPasswordHash(password_hash);
    checkPasswordHash2(password_hash2);
    checkPasswordsMatch(password_hash, password_hash2);
}

// Check if name is filled in and 200 characters or less. If not, show user the error
function checkName(string) {

    if (!(isBlank(string)) & (string.length <= 200)) {
        document.getElementById("nameField").style.borderColor="#e2e5e9";
        document.getElementById("name-error").innerHTML = "";
    }

    if (isBlank(string)) {
        document.getElementById("name-error").innerHTML = "Please enter your name";
        document.getElementById("nameField").style.borderColor="#cc0000";
    } else if (string.length > 200) {
        document.getElementById("name-error").innerHTML = "Name must be 200 characters or less";
        document.getElementById("nameField").style.borderColor="#cc0000";
    }
}

// Check if username is filled in and 20 characters or less. If not, show user the error
function checkUsername(string) {

    if (!(isBlank(string)) & (string.length <= 20)) {
        document.getElementById("usernameField").style.borderColor="#e2e5e9";
        document.getElementById("username-error").innerHTML = "";
    }

    if (isBlank(string)) {
        document.getElementById("username-error").innerHTML = "Please enter your username";
        document.getElementById("usernameField").style.borderColor="#cc0000";
    } else if (string.length > 20) {
        document.getElementById("username-error").innerHTML = "Username must be 20 characters or less";
        document.getElementById("usernameField").style.borderColor="#cc0000";
    }
}

// Check if email is filled in, not more than 120 characters, and seems to be an email address. If not, show user the error
function checkEmail(string) {

    if (!(isBlank(string)) & (string.length <= 120)) {
        document.getElementById("emailField").style.borderColor="#e2e5e9";
        document.getElementById("email-error").innerHTML = "";
    }

    if (isBlank(string)) {
        document.getElementById("email-error").innerHTML = "Please enter your email address";
        document.getElementById("emailField").style.borderColor="#cc0000";
    } else if (string.length > 120) {
        document.getElementById("email-error").innerHTML = "Email must be 120 characters or less";
        document.getElementById("emailField").style.borderColor="#cc0000";
    } else {
        validateEmail(string);
    }
}

// Check if password is filled in, not more than 128 characters. If not, show user the error
function checkPasswordHash(string) {

    if (!(isBlank(string)) & (string.length <= 128)) {
        document.getElementById("passwordHash").style.borderColor="#e2e5e9";
        document.getElementById("password-error").innerHTML = "";
    }

    if (isBlank(string)) {
        document.getElementById("password-error").innerHTML = "Please enter your password";
        document.getElementById("passwordHash").style.borderColor="#cc0000";
    } else if (string.length > 20) {
        document.getElementById("password-error").innerHTML = "Password must be 128 characters or less";
        document.getElementById("passwordHash").style.borderColor="#cc0000";
    }
}

// Check if confirmation password is filled in, not more than 128 characters. If not, show user the error
function checkPasswordHash2(string) {

    if (!(isBlank(string)) & (string.length <= 128)) {
        document.getElementById("passwordHash2").style.borderColor="#e2e5e9";
        document.getElementById("password-error-2").innerHTML = "";
    }

    if (isBlank(string)) {
        document.getElementById("password-error-2").innerHTML = "Please confirm your password";
        document.getElementById("passwordHash2").style.borderColor="#cc0000";
    } else if (string.length > 20) {
        document.getElementById("password-error-2").innerHTML = "Password must be 128 characters or less";
        document.getElementById("passwordHash2").style.borderColor="#cc0000";
    }
}

// Check if passwords match. If not, show user the error
function checkPasswordsMatch(string1, string2) {

    if (string1 == string2) {
        document.getElementById("password-error").innerHTML = "";
        document.getElementById("passwordHash").style.borderColor="#e2e5e9";
        document.getElementById("password-error-2").innerHTML = "";
        document.getElementById("passwordHash2").style.borderColor="#e2e5e9";
    } else {
        document.getElementById("password-error").innerHTML = "Passwords must match";
        document.getElementById("passwordHash").style.borderColor="#cc0000";
        document.getElementById("password-error-2").innerHTML = "Passwords must match";
        document.getElementById("passwordHash2").style.borderColor="#cc0000";
    }
}

// Check if user has written a valid email address
// Adapted from https://www.w3schools.blog/email-validation-javascript-js
function validateEmail(emailId) {
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (emailId.match(mailformat)) {
        return true;
    } else {
        document.getElementById("email-error").innerHTML = "Please enter a valid email address";
        document.getElementById("emailField").style.borderColor="#cc0000";
        return false;
    }
}    

// Check if an input field is blank
function isBlank(formField) {
    if (formField==null || formField=="") { 
        return true; 
    }
}