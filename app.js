/*
https://typing.dlvhdr.me/
https://medium.com/@ravipatel.it/building-a-secure-user-registration-and-login-api-with-express-js-mongodb-and-jwt-10b6f8f3741d
https://medium.com/@akshatgadodia/a-comprehensive-guide-to-structuring-node-js-projects-best-practices-and-example-44eb493920ca
https://dev.to/ericchapman/nodejs-express-part-5-routes-and-controllers-55d3
https://medium.com/@pratik_shrestha/sending-emails-with-node-js-and-gmail-using-nodemailer-a-step-by-step-guide-29fa8fcc6ed6
https://medium.com/@chandantechie/jimplementing-of-jwt-authentication-in-nodejs-application-38e4c6627fe5
https://www.cloudzilla.ai/dev-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/#join-waitlist
*/

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
