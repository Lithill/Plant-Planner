# Plant Planner

This website has been created to help people to know when to water their plants. It has been designed with a range of different screen sizes in mind. 

!["Am I Responsive" image](#)

[View the live project here](#)

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

It may be helpful for people with with less-than-green thumbs to have an automated list of when their indoor plants next need to be watered. It is usual for people to just water all of their house plants at the same time, perhaps once a week, but different plants need different amounts of water. 

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

A clean and unclutered approach was sought, so that the user could easily see the information they needed.

![Index Page](plantplanner/static/images/readme/my_plants.jpg)

This website was designed desktop-first. This caused issues further on in the development.

![Login Page](plantplanner/static/images/readme/sign_in.jpg)

This is because it was decided early on that Bootstrap would be used in order to speed up the process. But at the time this decision was made, it wasn't understood that Bootstrap is a mobile-first framework.

![Add Plant Page](plantplanner/static/images/readme/add_plant.jpg)

The design also changed during development because it was felt that the base template functionality of Flask could be better utilised. This in turn helped to create more uniform user interface.

### Colour scheme

The website sparingly uses a colour palette often found in nature. This was felt to be suitable for a website designed for gardeners. 

![Colour Scheme](plantplanner/static/images/readme/colour_palette.jpg)

### Typography

Google Fonts was used to import the following fonts:

* Merriweather is a serif font. This is used for the navigation bar and headings.
* Arimo is a sans-serif font. This is used for all other text.  

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

   * View your plants buttons, which takes the user to their plants page. 

   ![View your plants button](plantplanner/static/images/readme/view_plants_button.webp)

### Register

The registration page has the following features:

* A form the takes the users name, username, email address and password, and sends this to the database. 

   ![View your plants button](plantplanner/static/images/readme/register_form.webp)

* The password is hidden from view, and confirmed using two password fields. 

   ![View your plants button](plantplanner/static/images/readme/password.webp)

* Form validation is used on all fields.

   ![View your plants button](plantplanner/static/images/readme/name_validation.webp)

Add password validation here


### Log in
### Account dashboard
### Edit account
### My plants

The plants page is filtered by when the plants next need to be watered, so that the plants most in need of watering are at the top. Plants that need watering now also have red text. 

### Plant profile
### Add plants
### Edit plants





### Future Features

* Add 'feeding' to the plant information. 
* Add email alerts, so that the user can get notifications when they need to water / feed plants.
* Add ability for user to change their password

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

* [Google Fonts](https://fonts.google.com/) was used to import East Sea Dokdo and Eater.
* [Git](https://git-scm.com/) was used for version control by using the Gitpod terminal to commit to Git and Push to GitHub.
* [GitHub](https://github.com/) was used to store the projects' code after being pushed from Replit, and to handle version control.
* [Paint.Net](https://www.getpaint.net/download.html) was used to edit images.
* [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/) was used to troubleshoot and test features and solve issues with responsiveness and styling.
* [Am I Responsive?](https://ui.dev/amiresponsive) was used to show the website on a range of devices.
* [Unicorn Revealer](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln?hl=en-GB) was used for debugging.
* [SQLAlchemy](https://www.sqlalchemy.org/) was used to connect Python code with the database.
* [Psycopg2](https://www.psycopg.org/docs/) was used to connect Python code with the database. 
* [Flask](https://flask.palletsprojects.com/en/2.2.x/) is the web application framework which was used to build the website.
* [Bootstrap 5](https://getbootstrap.com/) was used for CSS shortcuts.
* [PostgreSQL](https://www.postgresql.org/) was the object-relational database system used.
* [ElephantSQL](https://www.elephantsql.com/) was used to host the database.
* [Heroku](https://www.heroku.com/) was used to deploy the website.

## Deployment and Local Development

### Deployment

This project was deployed to GitHub Pages using the following steps:

1. Log into GitHub and locate the [GitHub Repository](https://github.com/Lithill/Plant-Planner).
2. Click the settings button (above the "add file" button).
3. Click on "Pages" on the left-hand-side column.
4. Under "Source", click the dropdown called "Main", select folder ""/root" and click "save".
5. Refresh the page.
6. Click on the "Visit site" button at the top of the page.

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

### How to set up the gitpod environment after session times out:
   In the terminal, type:
      - set_pg
      - psql
   
### How to run the server to see the website in the browser:
   In the terminal, type:
      - python3 run.py
   
   Make sure that you consistently run this and the above commands in the same terminal. 
   
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

Testing was ongoing throughout the entire build. I utilised Chrome developer tools while building to pinpoint and troubleshoot any issues as I went along. Both manual and automated testing were employed. The difference between these two types of tests is that:

* manual testing is conducted by a person, who is seeing if they can break the product, or otherwise whether it behaves as expected for users.
* automatic testing is conducted by automation frameworks, or some other kind of tool or piece of software. 

I personally tested the page and had X people also manually test it on their own devices. For automated testing, I used W3C validator, CSS validator, Python Checker and Lighthouse.  

### W3C Validator

The [W3C HTML Validator](https://validator.w3.org/) was used to validate the HTML on all pages of the website. 

Results from the [check](#).

### CSS Validator

The [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) was used to validate the CSS in the style.css file.

Results from the [check](#).

### JSHint Validator

The [JSHint Validator](https://jshint.com/) was used to validate the JavaScript in the script.js file.

Results from the [check](#).

### Pep8 Validator

The [Python Validator](https://www.pythonchecker.com/) was used to validate the Python code.

Results from the [check](#).

### Solved Bugs

| Bug Number  | Expected behaviour | Actual behaviour | Solution |
| ---:        |    :----:          |        :----:    | :---     |
| 1  | Form is visible when navigating to test_pw.html | Jinja error - AttributeError: 'PasswordForm' object has no attribute 'validate_on_submit' | Import FlaskForm from flask_wtf, and pass FlaskForm into the form. |
| 2  | Button images continue to be visible after deleting a plant from the plant.html page  | Button images break after deleting a plant from the plant.html page | src code needed Jinja template. (E.g. {{ url_for('static', filename='images/add.webp') }}) |
| 3  | When clicking on buttons on plants page, they always work | Clicking on buttons on plants page does not work when three plants image div is over it | Move three plants image |
| 4  | Plants list is always in order of when plants need to be watered - soonest at the top | Plants list re-orders itself after deleting a plant | Did not change code on the delete route when added the list-by-water-date functionality |
| 5  | When user is deleted, user should be redirected back to register page, and not appear signed in | When user is deleted, user looks like they are on "My Plants" page, and can see "Logout" on the navbar | Change instructions, and add logout to the routes file |
| 6  | Individual plant pages should only be visible to logged-in user | Individual plant pages can be viewed by other users and people not logged in | Add login required to routes, and jinja if statement to html page |
| 7  | Cannot see plant that belongs to a deleted user | Can see plant after deleting the user. (this means that cascade delete isn't working AND user auth isn't working on the single plant page. Is user somehow still logged in? Is the model not set up correctly?) | Add delete ascade to user model |
| 8  | For there only to be one horizontal line above each plant on the My Plants page | There are extra lines at the bottom of plants in the My Plants page | Move the horizontal line into the if statement on the plants page |

### Known Bugs

| Bug Number  | Expected behaviour | Actual behaviour | Solution |
| ---:        |    :----:          |        :----:    | :---     |
| 9  | User registration form tells the user when their passwords do not match | Does not tell the user when their passords do not match | ? |

### Lighthouse

I used Lighthouse through Chrome Developer Tools to test accessibility, performance, best practices and SEO of the website.

#### Initial Testing

[Mobile](#)

Improvements recommended:

* 

#### Fixes and Most Recent Lighthouse Testing

After fixing the recommended areas, this is the lighthouse tests that the webpage received:

[Desktop](#) ~ [Mobile](#)

### Full Testing

To fully test my website, I used Google Chrome Developer Tools to ensure that the page was responsive on all available screen sizes. Testing was performed on a variety of browsers (Chrome, Microsoft Edge and Firefox) and devices (Gigabyte gaming laptop, iPhone SE, Android one+ 9 mobile, Lenovo Legion Laptop, Huawei P Smart Phone, Fair Phone).

#### Buttons:

Tested each button on the page. Each button worked as expected or was appropriately disabled. All buttons were clicked during a variety of game-play-states, and in a variety of orders. 

## Credits

Thanks are given for the following posts and tutorials:

* [Good explanation of cascade (ON DELETE/UPDATE) behavior](https://dba.stackexchange.com/questions/44956/good-explanation-of-cascade-on-delete-update-behavior)
by Johntron on Stack Exchange. 
* [Good tutorial of flash in Flask](https://www.youtube.com/watch?v=abCSKRMGZ3A)
on Comedy.com's youtube channel. 
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
* The add button was made by the creator.

### Acknowledgements

I would like to acknowledge the following people who helped me along the way in completing my second milestone project:

- My mentor Mitko Bachvarov for helpful feedback and sharing links for further learning.
- My tutor Robert Mclaughlin for helpful feedback and sharing links for further learning.