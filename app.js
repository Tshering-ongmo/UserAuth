const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
require('dotenv').config();
const { createUserTable } = require('./Models/userModel');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: process.env.SESSION_SECRET || 'secretkey',
  resave: false,
  saveUninitialized: true,
}));

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
const adminRoutes = require('./routes/adminRoutes');
const authRoutes = require('./routes/authroutes');
const userRoutes = require('./routes/userRoutes');
app.use('/', authRoutes);
app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

// Schema creation
createUserTable(); // Call this after setting up middlewares

const { createFoodTable } = require('./Models/foodModel');
createFoodTable();

// Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

