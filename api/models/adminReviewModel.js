const mongoose = require("mongoose");

const adminReviewdSchema = mongoose.Schema({
  content: String,
  createdBy: String,
  where: String,
});

module.exports = mongoose.model("AdminReview", adminReviewdSchema);
