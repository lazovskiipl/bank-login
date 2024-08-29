const mongoose = require('mongoose');

exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect('mongodb://localhost:27017/mydatabase')
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });
};

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

// Create a User model based on the schema
exports.User = mongoose.model('User', userSchema);
