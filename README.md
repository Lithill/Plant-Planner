# Plant Planner

This website has been created to help people to know when to water their plants. It has been designed with a range of different screen sizes in mind. 

!["Am I Responsive" image](plantplanner/static/images/readme/amiresponsive.webp)

[View the live project here](https://plant-planner-app.herokuapp.com/)

## Table of Contents

1. [User Experience](#user-experience)
3. [Design](#design)
5. [Features](#features)
6. [Accessibility](#accessibility)
7. [Technologies Used](#technologies-used)
8. [Deployment and Local Development](#deployment-and-local-development)
9. [Testing](#testing)
10. [Credits](#credits)
    
## User Experience

### Initial Discussion

It may be helpful for people with less-than-green thumbs to have an automated list of when their indoor plants next need to be watered. It is usual for people to just water all their house plants at the same time, perhaps once a week, but different plants need different amounts of water. 

#### Key information for the site

* How to use the website
* Ability for user to sign up and log in
* Ability for user to add, edit and delete their own plants
* Ability for user to edit when they last watered each plant

### User Stories

#### Client Goals

* To be able to view the site on a range of device sizes.
* To have a list that shows them when they need to water their plants, in order of the plants that need watering the soonest. 

#### First Time Visitor Goals

* To sign up
* To add all their plants 

#### Returning Visitor Goals 

* To sign in
* To edit when they last watered their plants

#### Longer Term Visitor Goals 

* To sign in
* To edit when they last watered their plants
* To check when they need to water their plants

## Design

### Early Design Phases / Wireframes

The Wireframes were made via [Paint.net](https://www.getpaint.net/).

A clean and uncluttered approach was sought, so that the user could easily see the information they needed.

![Index Page](plantplanner/static/images/readme/my_plants.jpg)

This website was designed desktop-first. This caused issues further on in development.

![Login Page](plantplanner/static/images/readme/sign_in.jpg)

This is because it was decided early on that Bootstrap would be used to speed up the process. But at the time this decision was made, it was not understood that Bootstrap is a mobile-first framework.

![Add Plant Page](plantplanner/static/images/readme/add_plant.jpg)

The design also changed during development because it was felt that the base template functionality of Flask could be better utilised. This in turn helped to create a more uniform user interface.

### Colour scheme

The website sparingly uses a colour palette often found in nature. This was felt to be suitable for a website designed for gardeners. 

![Colour Scheme](plantplanner/static/images/readme/colour_palette.jpg)

### Typography

Google Fonts was used to import the following fonts:

* Merriweather is a serif font. This is used for the navigation bar and headings.
* Arimo is a sans-serif font. This is used for all other text. 

### Database Schema

It was felt that a relational database was required, as there was a need for the user and plant data to be related. 

![Schema](plantplanner/static/images/readme/schema.webp)

## Features

The website is made up of 9 pages:

* Index
* Register
* Log in
* Account dashboard
* Edit account
* My plants
* Plant profile
* Add plants
* Edit plants

### Index

The index page has the following features:

If the user is not signed in, they will see the following buttons:

   * Log in button, which takes the user to the log in page

   ![Add plant button](plantplanner/static/images/readme/login.webp)

   * Register button, which takes the user to the registration page

   ![Add plant button](plantplanner/static/images/readme/register.webp)

If the user is signed in, they will see the following buttons:

   * Add button, which takes the user to the "Add Plant" page.

   ![Add plant button](plantplanner/static/images/readme/add_plant_button.webp)

   * View your plants button, which takes the user to their plants page. 

   ![View your plants button](plantplanner/static/images/readme/view_plants_button.webp)

### Register

The registration page has the following features:

* A form that takes the users name, username, email address and password, and sends this to the database. 

   ![User form](plantplanner/static/images/readme/register_form.webp)

* The password is hidden from view and confirmed using two password fields. 

   ![Password fields](plantplanner/static/images/readme/password.webp)

* Form validation is set up for all fields. This appears if the user leaves any fields blank, or if their passwords do not match.

   ![Form validation](plantplanner/static/images/readme/reg_form_val.webp)

* Button to submit the form. When the form is submitted, this creates a user account, and takes the user to the login page.

   ![Submit button](plantplanner/static/images/readme/submit.webp)

* A flash message appears on the next page when the user has created a new account successfully. 

   ![Flash message](plantplanner/static/images/readme/user_added_successful.webp)

### Log in

The log in page has the following features:

* A form that takes the users username and password and compares these to those stored in the database to verify the users identify. 

   ![Login form](plantplanner/static/images/readme/login_form.webp)

* Form validation is set up for all fields. This appears if the user leaves any fields blank. 

   ![Login form vaidation](plantplanner/static/images/readme/login_validation.webp)

* Button to submit the form. When the form is submitted, this authenticates the user, and takes them to their plants page.

   ![Submit button](plantplanner/static/images/readme/submit.webp)

* A flash message appears on the next page when the user has logged in successfully. 

   ![Flash message](plantplanner/static/images/readme/login_successful.webp)

### My plants 

This page has the following features:

* A button that takes you to the Add Plant page

   ![Add plant button](plantplanner/static/images/readme/add_plant_button2.webp)

* Self populating plant divs that pull your saved plants data from the database and displays them. These are automatically ordered by the date the plants next need to be watered, so that the plants most in need of watering are at the top. Plants that need watering also have red text to alert the user. The tense of the text also changes depending on whether you needed to have watered the plants in the past, need to water them today, or if you need to water them in the future.

   ![Self populating plant divs](plantplanner/static/images/readme/plant_div.webp)

* Each plant has its own set of buttons which will perform actions on that particular plant:

   * The "see more" button takes the use to a page dedicated to that particular plant, where they will be able to see the plant's notes.

      ![See more button](plantplanner/static/images/readme/see_more.webp)
   
   * The edit button takes the user to a page where they can edit the details of the plant.

      ![Edit plant button](plantplanner/static/images/readme/edit_plant.webp)
   
   * The "delete" button displays a modal which confirms that the user would like to delete the plant in question.

      ![Delete plant button](plantplanner/static/images/readme/delete_plant.webp)
      
* The delete modal confirms with the user that they would like to delete their plant

   ![Delete modal](plantplanner/static/images/readme/delete_modal.webp)

   This modal has two buttons.

   * One button will hide the modal

      ![Close modal button](plantplanner/static/images/readme/modal_close_button.webp)

   * The other button will delete the plant and then hide the modal

      ![Delete button](plantplanner/static/images/readme/modal_delete_button.webp)

### Add plant

This page has the following features:

* A form to add a new plant to the database. It asks the user for these details of the plant - Common Name / Latin Name / Watering Interval / Date Last Watered / Notes.

   ![Add plant form](plantplanner/static/images/readme/add_plant_form.webp)

   This form includes:

   * Validation warnings when required fields (Common Name, Latin Name, Watering Interval and Date Last Watered) are not completed. Form validation also alerts the user if they type in a watering interval that is less than 1, or type in a last watered date that is in the past. 

      ![Form validation](plantplanner/static/images/readme/add_plant_form_val.webp)

   * A notes section with a variety of different formatting abilities
   
      ![Notes formatting options](plantplanner/static/images/readme/notes.webp)

   * A back button that takes the user to their "My Plants" page

      ![Back button](plantplanner/static/images/readme/back_button.webp)

   * A submit button that submits the form data to the database and redirects the user to their "My Plants" page. 

      ![Submit button](plantplanner/static/images/readme/submit.webp)
   
   * Tooltips that appear when the user hovers their mouse over each field label. (They do not appear all at the same time. The below is meant as a quick visual reference only.) 

      ![Tooltips](plantplanner/static/images/readme/plant_upper_tooltips.webp)

      ![Tooltips](plantplanner/static/images/readme/plant_lower_tooltips.webp)

   * A flash message that appear on the page after the user has successfully added a plant

      ![Flash message](plantplanner/static/images/readme/plant_added.webp)

### Plant profile

This page has the following features:

* A div that contains all the information of the plant that the user previously selected. This includes the watering text appearing red if the user needs to water their plant.

   ![Plant profile](plantplanner/static/images/readme/plant_profile.webp) 

   * Edit button, which takes the user to the plant edit page.

      ![Edit button](plantplanner/static/images/readme/edit_plant.webp)

   * Back button, which takes the user to my plants page. 

      ![Back button](plantplanner/static/images/readme/back_button.webp)

   * Delete button, which triggers the delete modal.

      ![Delete button](plantplanner/static/images/readme/delete_plant.webp)

   * Delete modal, which confirms that the user would like to delete the plant. 

      ![Delete modal](plantplanner/static/images/readme/delete_plant_modal.webp)

      * This modal has the following features:

         * Delete button, which will delete the plant and return the user to the My Plants page. 

            ![Delete button](plantplanner/static/images/readme/modal_delete_button.webp)
         
         * Close button, which will close the delete modal without deleting the plant. 

            ![Close modal button](plantplanner/static/images/readme/modal_close_button.webp)

### Edit plants

This page has the following features:

* A pre-populated form containing all the details of the plant the user would like to edit. 

   ![Edit plant form](plantplanner/static/images/readme/edit_plant_form.webp)

   This form includes:

   * The same validation that has been previously mentioned for the Add Plant page. 

      ![Form validation](plantplanner/static/images/readme/edit_plant_form_val.webp)
   
   * Back button, which takes the user back to the My Plants page. 

      ![Back button](plantplanner/static/images/readme/back_button.webp)

   * Save button, which saves the edited data to the database, and returns the user to the plant profile page. 

      ![Save button](plantplanner/static/images/readme/submit.webp)
   
   * Tooltips that appear when the user hovers their mouse over each field label. (They do not appear all at the same time. The below is meant as a quick visual reference only.) 

      ![Tooltips](plantplanner/static/images/readme/plant_upper_tooltips.webp)

      ![Tooltips](plantplanner/static/images/readme/plant_lower_tooltips.webp)

   * A flash message that appear on the page after the user has successfully added a plant

      ![Flash message](plantplanner/static/images/readme/plant_updated.webp)

### Account dashboard

This page has the following features:

* The details that the user added during registration, apart from their password. 

   ![User details](plantplanner/static/images/readme/account.webp)

* Edit button, which takes users to the edit account page. 

   ![Edit button](plantplanner/static/images/readme/edit_plant.webp)

* Delete button, which opens a delete modal.

   ![Delete button](plantplanner/static/images/readme/delete_plant.webp)

* Delete modal, which confirms with the user that they want to delete their account.

   ![Delete user modal](plantplanner/static/images/readme/delete_user_modal.webp)

   This modal has the following features:

   * Delete button, which triggers the deleting of the user, and all the plants associated with them. Then redirects them to the registration page. 

      ![Delete button](plantplanner/static/images/readme/modal_delete_button.webp)

   * Close button, which closes the modal without deleting the user account. 

      ![Close modal](plantplanner/static/images/readme/modal_close_button.webp)

### Edit account

This page has the following features:

* Pre-populated information about the user. 

   ![Edit user form](plantplanner/static/images/readme/edit_user.webp)

* Validation alerts that require the user to make sure all fields are filled in.

   ![Edit user form](plantplanner/static/images/readme/edit_user_val.webp)

* Save button, which saves the updated user information, and redirects the user to their account.

   ![Submit button](plantplanner/static/images/readme/submit.webp)

* Delete button, which triggers the delete modal.

   ![Delete button](plantplanner/static/images/readme/delete_plant.webp)

* Delete modal, which confirms with the user that they want to delete their account.

   ![Delete user modal](plantplanner/static/images/readme/delete_user_modal.webp)

   This modal has the following features:

   * Delete button, which triggers the deleting of the user, and all the plants associated with them. Then redirects them to the registration page. 

      ![Delete button](plantplanner/static/images/readme/modal_delete_button.webp)

   * Close button, which closes the modal without deleting the user account. 

      ![Close modal](plantplanner/static/images/readme/modal_close_button.webp)

* Flash message on the next page to let the user know that they have successfully updated an account.

   ![Flash message](plantplanner/static/images/readme/user_updated.webp)

### 404 page

This page has the following features:#

* Information to show the user that the page they were looking for was not found.

   ![404](plantplanner/static/images/readme/404.webp)

### All pages have the following features

This page has the following features:

* Navigation bar, which turns into a hamburger menu on narrower screens. The links included go to the register, login, add a plant and my plants pages. Clicking on "Plant Planner" of the calendar plant icon will also take the user to the home page.

   ![Navbar](plantplanner/static/images/readme/navbar.webp)

   ![Narrow Navbar](plantplanner/static/images/readme/small_navbar.webp)

* Footer, which includes working buttons to the home pages of Instagram, twitter, and Facebook.

   ![Footer](plantplanner/static/images/readme/footer.webp)

* Page title and information section, which changes depending on which page the user is on. 

   ![Page title and information](plantplanner/static/images/readme/title.webp)

### Future Features

* Prevent users from adding a random string rather than an email
* Add 'feeding' to the plant information. 
* Add email alerts, so that the user can get notifications when they need to water / feed plants.
* Add ability for user to change their password
* Add ability to differentiate between different months, as plants often need a different amount depending on the time of year. 

## Accessibility

I have been mindful during coding to ensure that the website is as accessible as possible. I have achieved this by:

* Using semantic HTML.
* Using descriptive alt attributes on images on the site.
* Supplying information for screen readers where there are icons used and no text, such as footer icons.
* Guaranteeing adequate colour contrast throughout the site.

## Technologies Used

### Languages Used

HTML5, CSS3, Python, and JavaScript were used to create this website.

### Frameworks, Libraries & Programs Used

* [Google Fonts](https://fonts.google.com/) was used to import Merriweather and Arimo.
* [Git](https://git-scm.com/) was used for version control by using the Gitpod terminal to commit to Git and Push to GitHub.
* [GitHub](https://github.com/) was used to store the projects' code, and to handle version control.
* [Paint.Net](https://www.getpaint.net/download.html) was used to edit and crop images.
* [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/) was used to troubleshoot and test features and solve issues with responsiveness and styling.
* [Am I Responsive?](https://ui.dev/amiresponsive) was used to show the website on a range of devices.
* [Unicorn Revealer](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln?hl=en-GB) was used for debugging.
* [SQLAlchemy](https://www.sqlalchemy.org/) was used to connect Python code with the database.
* [Psycopg2](https://www.psycopg.org/docs/) was used to connect Python code with the database. 
* [Flask](https://flask.palletsprojects.com/en/2.2.x/) is the web application framework which was used to build the website.
* [Bootstrap 5](https://getbootstrap.com/) was used for responsive and pre-designed CSS.
* [PostgreSQL](https://www.postgresql.org/) was the object-relational database system used.
* [ElephantSQL](https://www.elephantsql.com/) was used to host the database.
* [Heroku](https://www.heroku.com/) was used to deploy the website.

## Deployment and Local Development

### Deployment

This project was deployed to Heroku using the following steps:

#### ElephantSQL

1. Navigate to ElephantSQL.com and create a user account, using log in with GitHub.
2. Click “Create New Instance”.
3. Set up your plan. (You can leave the 'tags' field blank.)
4. Select region.
5. Select a data centre near you
6. Then click “Review”.
7. Check your details are correct and then click “Create instance”.
8. Return to the ElephantSQL dashboard and click on the database instance name for this project
9. In the URL section, clicking the copy icon will copy the database URL to your clipboard
10. Leave this tab open, we will come back here later

#### Heroku

1. Log into Heroku.com and click “New” and then “Create a new app”.
2. Choose a unique name for your app, select the region closest to you and click “Create app”.
3. Go to the Settings tab of your new app
4. Click Reveal Config Vars
5. Return to your ElephantSQL tab and copy your database URL
6. Back on Heroku, add a Config Var called DATABASE_URL and paste your ElephantSQL database URL in as the value. Make sure you click “Add.”
7. Add each of your other environment variables except DEVELOPMENT and DB_URL from the env.py file as a Config Var. 
8. Navigate to the “Deploy” tab of your app.
9. In the Deployment method section, select “Connect to GitHub”.
10. Search for your repo and click Connect
11. Optional: You can click Enable Automatic Deploys in case you make any further changes to the project. This will trigger any time code is pushed to your GitHub repository.
12. As we already have all our changes pushed to GitHub, we will use the Manual deploy section and click Deploy Branch. This will start the build process. 
13. Now, we have our project in place, and we have an empty database ready for use. As you may remember from our local development, we still need to add our tables to our database. To do this, we can click the “More” button and select “Run console.”
14. Type python3 into the console and click Run
15. In the terminal that opens, write "from plantplanner import db" and then press enter.
16. In the terminal, write "db.create_all()" and then press enter.
17. Exit the Python terminal, by typing exit() and hitting enter, and close the console. Our Heroku database should now have the tables and columns created from our models.py file.
18. The app should be up and running now, so click the “Open app” button

### Local Deployment

#### How to Fork

To fork the Plant Planner repository:

1) Log in (or sign up) to GitHub.
2) Go to the repository for this project, at [GitHub Repository](https://github.com/Lithill/Plant-Planner).
3) Click the Fork button in the top right corner.

#### How to Clone

To clone the Plant Planner repository:

1) Log in (or sign up) to GitHub.
2) Go to the repository for this project, at [GitHub Repository](https://github.com/Lithill/Plant-Planner).
3) Above the list of files, click "Code".
4) Click "Open with GitHub Desktop" to clone and open the repository with GitHub Desktop.
5) Click "Choose..." and, using Windows Explorer, navigate to a local path where you want to clone the repository.
6) Click "Clone".

### How to set up the Gitpod environment after session times out:
   In the terminal, type:
      - set_pg
      - psql
   
### How to run the server to see the website in the browser:
   In the terminal, type:
      - python3 run.py
   
   Make sure that you consistently run this and the above commands in the same terminal. Not doing this will cause errors. 
   
### Installations and commands in the terminal - needed if forking or using a different workspace
   * pip3 install 'Flask-SQLAlchemy<3' psycopg2 sqlalchemy==1.4.46
   * pip install flask-wtf
   * pip install flask-sqlalchemy
   * To create a working database in the workspace:
      - set_pg
      - psql
      - CREATE DATABASE plantplanner;
      - \q
      - python3
      - from plantplanner import db
      - db.create_all()
      - exit()
   * To delete the database (please note that you must delete and re-create the database if you change the models. Migration is not set up)
      - set_pg
      - psql
      - DROP DATABASE plantplanner;
      - \q
   * pipenv install python-dotenv
   * pip install flask_login
   * pip install flask-ckeditor

## Testing

Testing was ongoing throughout the entire build. I utilised Chrome developer tools while building to pinpoint and troubleshoot any issues as I went along. Both manual and automated testing was employed. The difference between these two types of tests is that:

* Manual testing is conducted by a person, who is seeing if they can break the product, or otherwise whether it behaves as expected for users.
* Automatic testing is conducted by automation frameworks, or another kind of tool or piece of software. 

I personally tested the page and had 3 people also manually test it on their own devices. For automated testing, I used W3C validator, CSS validator, Python Checker and Lighthouse. 

### W3C Validator

The [W3C HTML Validator](https://validator.w3.org/) was used to validate the HTML on all pages of the website. 

* Results from the [404](plantplanner/static/images/readme/404_val.webp) page check.
* Results from the [500](plantplanner/static/images/readme/500_val.webp) page check.
* Results from the [account](plantplanner/static/images/readme/account_val.webp) page check.
* Results from the [add_plant](plantplanner/static/images/readme/add_plant_val.webp) page check.
* Results from the [add_user](plantplanner/static/images/readme/add_user_val.webp) page check.
* Results from the [edit_plant](plantplanner/static/images/readme/edit_plant_val.webp) page check.
* Results from the [index](plantplanner/static/images/readme/index_val.webp) page check: user not logged in.
* Results from the [index](plantplanner/static/images/readme/index_logged_in_val.webp) page check: user logged in.
* Results from the [login](plantplanner/static/images/readme/login_val.webp) page check.
* Results from the [plant](plantplanner/static/images/readme/plant_val.webp) page check.
* Results from the [update](plantplanner/static/images/readme/update_val.webp) page check.

### CSS Validator

The [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) was used to validate the CSS in the style.css file.

Results from the [check](plantplanner/static/images/readme/css_val.webp).

### JSHint Validator

The [JSHint Validator](https://jshint.com/) was used to validate the JavaScript in the script.js file.

Results from the [check](plantplanner/static/images/readme/js_val.webp).

The results include an undefined variable, which comes from bootstrap. And six variables that are showing as unused because they come from onclick events in the html. 

### Pep8 Validator

The [Python Validator](https://www.pythonchecker.com/) was used to validate the Python code for init.py

Results from the [init.py](plantplanner/static/images/readme/init_val.webp) check.

I ignored this suggestion, as it is in relation to a file path. This strange request led me to use [the CI Python Linter](https://pep8ci.herokuapp.com/) for the rest of my validation. 

* Results from the [models.py](plantplanner/static/images/readme/models_val.webp) check.
* Results from the [routes.py](plantplanner/static/images/readme/routes_val.webp) check.
* Results from the [webforms.py](plantplanner/static/images/readme/webforms_val.webp) check.
* Results from the [env.py](plantplanner/static/images/readme/env_val.webp) check.
* Results from the [run.py](plantplanner/static/images/readme/run_val.webp) check.

### Solved Bugs

| Bug Number  | Expected behaviour | Actual behaviour | Solution |
| ---:        |    :----:          |        :----:    | :---     |
| 1  | Form is visible when navigating to test_pw.html | Jinja error - AttributeError: 'PasswordForm' object has no attribute 'validate_on_submit' | Import FlaskForm from flask_wtf, and pass FlaskForm into the form. |
| 2  | Button images continue to be visible after deleting a plant from the plant.html page  | Button images break after deleting a plant from the plant.html page | src code needed Jinja template. (E.g. {{ url_for('static', filename='images/add.webp') }}) |
| 3  | When clicking on buttons on plants page, they always work | Clicking on buttons on plants page does not work when three plants image div is over it | Move three plants image |
| 4  | Plants list is always in order of when plants need to be watered - soonest at the top | Plants list re-orders itself after deleting a plant | Did not change code on the delete route when added the list-by-water-date functionality |
| 5  | When user is deleted, user should be redirected back to register page, and not appear signed in | When user is deleted, user looks like they are on "My Plants" page, and can see "Logout" on the navbar | Change instructions, and add logout to the routes file |
| 6  | Individual plant pages should only be visible to logged-in user | Individual plant pages can be viewed by other users and people not logged in | Add login required to routes, and jinja if statement to html page |
| 7  | Cannot see plant that belongs to a deleted user | Can see plant after deleting the user. (This means that cascade delete is not working AND user auth is not working on the single plant page. Is user somehow still logged in? Is the model not set up correctly?) | Add delete cascade to user model |
| 8  | For there only to be one horizontal line above each plant on the My Plants page | There are extra lines at the bottom of plants in the My Plants page | Move the horizontal line into the if statement on the plants page |
| 9  | User registration form tells the user when their passwords do not match | Does not tell the user when their passwords do not match | Added form validation via JavaScript |
| 10  | When username is entered and submitted on the update user form that is longer than 20 characters long, it should warn the user this is not acceptable | When username is entered and submitted on the update user form that is longer than 20 characters long, it returns a SQLalchemy "PendingRollbackError" | Add maxlength to the username field on the edit user form |
| 11  | If there is no input in water interval and last watered fields on add plant form, then they will show a warning | Even if there is no input in these fields, they will not show a warning if the common name field is filled out. This is also happening on the edit page - from common name | Added datarequired validators to flask plant forms |
| 12 | Plant form does not submit if the date is in the future | Plant form submits if date is in the future | Add max date to input in html |

### Known Bugs

No known bugs

### Full Testing

To fully test my website, I used Google Chrome Developer Tools to ensure that the page was responsive on all available screen sizes. Testing was performed on a variety of browsers (Chrome, Microsoft Edge, and Firefox) and devices (Gigabyte gaming laptop, iPhone SE, Android one+ 9 mobile, Fair Phone).

#### Links:

Tested each link on every page. Each link worked as expected. 

#### Buttons:

Tested each button on every page. Each button worked as expected. 

#### Forms:

Checked that all forms behaved as expected in terms of:
   * Not submitting when required fields are left blank.
   * Returning flash messages when the user has successfully submitted a form.
   * Not allowing users to enter strings that are too long.

Things checked that are specific to particular forms:
   * The login form does not submit if the user picks a username that is already in the database.
   * The registration form:
      * Does not allow the user the enter two different passwords
      * Hashes the password the user chooses before storing it in the database.
   * The add and edit plant forms:
      * Do not allow the user to pick a date in the past from the date picked. If the user types in a past date, the form does not submit, and a warning message is shown to let the user know that the date cannot be in the future.
      * The watering interval field does not allow the user to select a number that is less than 0, and more than 182 (the number of days in six months). If the user types in an unacceptable number rather than selecting an appropriate number, the form does not submit, and the user is told why. 
      * I checked that when the user does not include a link in the image URL field, a default image is displayed on the plant information pages.

#### Tooltips:

Checked that tooltips behaved appropriately on edit plant page and add plant page.

#### Authentication:

The following was tested and found to be working as expected:

* Users can only access these sections and functions of the website if they are logged in -
   * User account
   * Add Plant
   * Delete Plant
   * View particular plant
   * Edit Plant
   * Log out
   * My Plants
   * Edit user details
* Users cannot view private information about other users, such as user account details or their plants. 

#### Database:

The following was tested and found to be working as expected:

* User data is added and persists over time.
* Plant data is added and persists over time.
* User is linked to plant data that they added.
* Plant data can be edited and deleted from the database.
* User data can be edited and deleted from the database.
* On deletion of the user, the plant data associated with that user is also deleted.

## Credits

Thanks are given for the following posts and tutorials:

* [Good explanation of cascade (ON DELETE/UPDATE) behavior](https://dba.stackexchange.com/questions/44956/good-explanation-of-cascade-on-delete-update-behavior)
by Johntron on Stack Exchange. 
* [Good tutorial of flash in Flask](https://www.youtube.com/watch?v=abCSKRMGZ3A)
on Comedy.com's YouTube channel. 
* [Cognitive Robot's post on Stack Overflow](https://stackoverflow.com/questions/52674364/flask-app-cant-passing-a-value-to-a-confirmation-modal-before-deleting-a-post)
helped me understand how to write the delete plant modal. 

### Code Used

* [Codemy's Flask Blog walkthrough](https://www.youtube.com/watch?v=0Qxtt4veJIc&list=PLCC34OHNcOtolz2Vd9ZSeSXWc8Bq23yEz&index=1)
was used to set up the initial bones of the project. 
* [Coding Yaar's](https://codingyaar.com/responsive-bootstrap-navbar-right-align/)
custom code for right-align bootstrap navbars. 
* [Coding Yaar's](https://codingyaar.com/responsive-bootstrap-navbar-with-vertical-line-separator/)
custom code for vertical line separated bootstrap navbar links. 
* [Pablo Santa Cruz's](https://stackoverflow.com/questions/25120621/python-get-date-in-future-x-days-and-hours-left-to-date)
 code for calculating dates. 
 * [Shinichi Okada's](https://medium.com/mkdir-awesome/how-to-change-the-bootstrap-5-tooltip-background-and-arrow-color-67e6c5aea510)
 code for customising bootstrap tooltips. 
  * [w3schools](https://www.w3schools.blog/email-validation-javascript-js)
 code for email validation was adapted for the validateEmail JavaScript function. 
 * [Samuel Meddows'](https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript)
 code was used for the "today" JavaScript function. 
 * [Kera Cudmore's](https://github.com/kera-cudmore/BookWorm/blob/b4d82678bb94e9e7ea1d5923f90807e51421d540/bookworm/auth/routes.py)
 code was used for the validate username code in def add_user in routes.py.

         free_username = Users.query.filter(
            Users.username == request.form.get("username").lower()).all()

         # If username exists - flash message & reload register page
         if existing_user:
            flash("This username already exists, please try another username.")
            return redirect(url_for("auth.register"))

### Content

Content for the website was made by Rossanne Hamilton.

### Media Used

* [Ttreis's image on Pixabay](https://pixabay.com/vectors/calendar-icon-minimalist-time-1559935/) was edited to create the logo. 
* [OpenClipart-Vector's image on Pixabay](https://pixabay.com/vectors/sapling-plant-growing-seedling-154734/) was edited and added to the above image to create the logo. 
* [Janjf93's image on Pixabay](https://pixabay.com/vectors/icon-symbol-pen-pencil-design-art-1970472/) was edited and used as the edit button. 
* [Table's image on Pixabay](https://pixabay.com/de/illustrations/m%c3%bcll-m%c3%bclleimer-l%c3%b6schen-abfall-2091534/) was edited and used as the delete button. 
* [Clker Free Vector Images's image on Pixabay](https://pixabay.com/de/vectors/tick-komplett-pr%c3%bcfen-rechts-27406/) was edited and used as the save button. 
* [NikkiGoCom's image on Pixabay](https://pixabay.com/de/vectors/gras-wiese-pflanze-gr%c3%bcn-fr%c3%bchling-6358622/) was used for the image behind the page titles. 
* [Eliona's image on Pixabay](https://pixabay.com/de/illustrations/pfeil-zeigen-anzeigen-drehen-1314462/) was edited and used for the back button.
* [Coffeebeanworks' image on Pixabay](https://pixabay.com/illustrations/social-media-social-media-icons-2083456/) was edited and used for the social media icons.
* [Mohamed Hassan's image on Pixabay](https://pixabay.com/illustrations/eye-computer-icon-vector-2387853/) was edited and used for the view button. 
* [Clker-Free-Vector-Images' image on Pixabay](https://pixabay.com/vectors/question-mark-question-icon-blue-310100/) was edited and used for the question button. 
* [Labunhanglimboo's image on Pixabay](https://pixabay.com/photos/sword-fern-fern-flower-pot-plant-6365766/) was used as an example plant image in the readme. 
* [Daan Rink's image on Pexels](https://www.pexels.com/photo/potted-plant-beside-the-window-7047366/) was used as an example plant image in the readme. 
* The add button was made by the creator.

### Acknowledgements

I would like to acknowledge the following people who helped me along the way in completing my second milestone project:

- My mentor Mitko Bachvarov for helpful feedback and sharing links for further learning.
- My tutor Robert Mclaughlin for helpful feedback and sharing links for further learning.
- Chris Mugridge and Maya Irish for user and device testing.