const mongoose = require("mongoose");

const clientReviewSchema = mongoose.Schema({
  content: String,
  createdBy: String,
  where: String,
});

module.exports = mongoose.model("ClientReview", clientReviewSchema);
