const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "First Name Is Require"],
    lowercase: true,
    trim: true,
    maxlength: [15, "First name should max or equal to 15 Charcters"],
  },
  lastname: {
    type: String,
    required: [true, "Last Name Is Require"],
    lowercase: true,
    trim: true,
    maxlength: [10, "Last name should max or equal to 10 Charcters"],
  },
  mobilenumber: {
    type: String,
    minlength: [10, "Number Should be less than 10"],
    maxlength: [10, "Number Should be more than 10"],
    required: [true, "Moblie Number Is Required"],
    unique: [true, "This number is already is use"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email should be provided"],
    unique: [true, "Email is already is use"],
    trim: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    trim: true,
    minlength: 6,
    required: [true, "Password should be require"],
  },
},{
  timestamps:true,
});

const User = mongoose.model("UserModelSchema", userSchema); /*Create Collection */
module.exports = User
