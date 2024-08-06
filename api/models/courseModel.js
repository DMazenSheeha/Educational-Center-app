const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  name: String,
  description: String,
  image: String,
});

module.exports = mongoose.model("Course", courseSchema);
