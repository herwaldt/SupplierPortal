const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  email: String,
  firstName: String,
  lastName: String,
  supplier: String,
});

mongoose.model('users', userSchema);
