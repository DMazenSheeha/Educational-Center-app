const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: String,
  userName: String,
  password: String,
  courses: [],
});

module.exports = mongoose.model("User", userSchema);
