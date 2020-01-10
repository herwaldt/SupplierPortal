const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  supplier: String,
});

mongoose.model('users', userSchema);
