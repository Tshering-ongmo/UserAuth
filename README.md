# Sherubtse Semester Registration
## Overview
It is an online system for registering in semesters that implements a user authentication system using Node.js, Express.js, PostgreSQL, and EJS for extra security. It should be possible to have users register, verify their emails, help them login, provide a new password if needed, and control their logged-in sessions. As a result, only verified users can use the platform, ensuring it stays safe and accountable.

## Technology Used
The server-side code is going to be written in Node.js, while Express.js will take care of all activities run on the server. It was thanks to EJS that HTML pages could be created on our server side as needed. For our database, we went with PostgreSQL and access it through pg-promise. We used JWT for verification, while we protected passwords with bcrypt for extra protection. For dealing with emails, we decided on nodemailer, and cookie-parser and express-session helped manage the session and cookies for users. To manage environment variables, I used the dotenv package.

## **Understanding the User Authentication Flow**
The user signup flow starts when someone new enters their name, email address, password, and what type of user they are in a simple online form. The password is made secure by being turned into a hash and a special token is also generated using JWT. This data gets added to the database with a default value of false for the is_verified field. A verification email is then sent to the user's email address and has a link in it that the user needs to use to finish signing up. When the user clicks the link, their email is checked, and they can then sign in to their account.

During login, the system first checks if the user actually exists in the system, then makes sure their email has been confirmed, and finally looks if the password the user typed matches the encrypted version saved in the database. If all the needed things happen, the JWT is made and saved as an httpOnly cookie, and after that the user is sent to the page they should see based on their role.
There is a “forgot password” page on the website, and users can find the link to reset their password by entering their registered email address, if they need to do so. Once the request is successful, a JWT-based reset token is sent to the user’s email. When the link in the email is clicked, the user is taken to a form where they should enter a new password. The password is now stored in the database in hashed form and the reset token is erased.

The “Forgot Password” link was not part of the login form. So you can placed a direct link under the login form in login.ejs to make the system more easy to use. So, if you cannot remember your password, you can log in again by resetting it using an email link from the reset page.

Every part of the system is arranged in a well-defined folder hierarchy. In the views folder, you will find EJS files called landing.ejs, login.ejs, signup.ejs, forgot-password.ejs, and reset-password.ejs. These templates take forms and messages from the backend and present them according to the backend’s answers. The controllers folder has authController.js, which manages everything related to signup, login, email verification, and password reset. The config folder holds the database settings, and there is one file in the models folder that makes sure the users table is set up with the required schema. All the routes for authentication are handled in authRoutes.js.

Also, you can find assets such as the stylesheet style.css and a folder with logos in the public folder. The CSS file controls the looks of the page, setting up a header, the main content space, and some displayed statistics. Because of these elements, the user interface is simple and appears professional.
You need to set up environment variables, like the port number, database details, email details, and JWT secrets, in the .env file before running the project. We start the project by issuing npm start, which fires up the server on http://localhost:3000. Only people who are verified can sign into the system, providing an important extra level of security.

From this exercise, I learned a lot about how such mechanisms work in the real world. I understood that keeping passwords safe, handling cookies for sessions, and confirming a user’s email address are all important. I also figured out that JWT tokens allow for both logging in and changing user passwords securely. The use of this system gave me a new respect for how web applications are designed using modules and how MVC (Model-View-Controller) helps improve app logic.

## Conclusion
As a result of this practical, I am better able to build secure and efficient user authentication systems for backend applications. The module helped me to understand both sides of a web application and boosted my ability to work on advanced projects.

