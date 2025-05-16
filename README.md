# Sherubtse Semester Registration
It is an online system for registering in semesters that requires user authentication and authorization at Sherubtse College. Following are the key components included:

## Project Structure
UserAuth/
├── app.js                  # Main application entry point
├── config/
│   └── db.js               # Database configuration
├── controllers/
│   └── authController.js   #Authentication logic
├── Models/
│   └── userModel.js         #User database schema
├── public/
│   ├── css/
│   │   └── style.css        #Styling
│   └── js/
│       └── script.js        # Client-side scripts
├── routes/
│   └── authRoutes.js        # Authentication routes
└── views/
└── pages/                   # EJS template
    └── landing.ejs
    └── login.ejs
    └── reset-password.ejs

## Explanation on User Authentication
## 1. App.js
The App.js file deals with the core functionality of the overall architecture. This is where the core logic of the application located including middleares and routes for dealing with incoming and outgoing requests. In this file I included necessary middleware that allows the server to do more tasks. Some middleware includes cookie parsing, which helps in managing and gathering cookies sent directly by the clients. This helps in user authentication as well as saving uset preferences. Session management is also set up to handle user sessions, so the server can remember users as they go from one request to another, particularly important for login and keeping user activity. By using certain middleware, static file serving makes CSS, JavaScript, and images available to end users. This way, the frontend is able to get hold of the resources it needs. By setting the view engine to use EJS (Embedded JavaScript), we can pass information from the server to the client by including JavaScript inside our HTML pages.

App.js takes care of setting up routes, which helps the server respond to the right endpoints, defined in other parts of the code. The database initialization ensures an automatic link to the database happens when the server restarts. This is very important for keeping and accessing any user or application information. Putting all these bits and pieces together forms a well-built and effective backend setup.
