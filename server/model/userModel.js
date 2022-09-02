const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  gender: {
    type: String,
    min: 8,
  },
  dob: {
    type: String,
    min: 8,
  },
  destination: {
    type: String,
    min: 8,
  },
  phoneNumber: {
    type: Number,
    min: 8,
  },
  isProfileSet: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Users", userSchema);
