const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required!"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required!"],
  },
  username: {
    type: String,
    unique: [true, "Username already exists!"],
  },
  email: {
    type: String,
    required: [true, "Email ID is required!"],
    unique: [true, "Email Id Already Registered"],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  phone: {
    type: String,
    required: [true, "Phone Number is required!"],
    unique: [true, "Phone Number already exists!"],
  },
});

module.exports = mongoose.model("User", userSchema);
