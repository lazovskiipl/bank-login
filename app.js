// Importing required modules
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authRoutes = require('./routes/auth');
const { connect } = require('./config/database');

// Creating an Express application instance
const app = express();
const PORT = 3000;

connect();

// Middleware to parse JSON bodies
app.use(express.json());
app.use('/api', authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
