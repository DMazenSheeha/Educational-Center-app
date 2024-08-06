const express = require("express");
const {
  sendReviewToAdmin,
  sendReviewToClient,
  getSingleReview,
  deleteReviewsFromAdmin,
  getReviewsFromAdmin,
  getReviewsFromClient,
} = require("../controllers/reviewsController");
const reviewsRoutes = express.Router();

reviewsRoutes.post("/toAdmin", sendReviewToAdmin);
reviewsRoutes.get("/reviewsFromAdmin", getReviewsFromAdmin);
reviewsRoutes.get("/reviewsFromAdmin/:id", getSingleReview);
reviewsRoutes.delete("/reviewFromAdmin/:id", deleteReviewsFromAdmin);
reviewsRoutes.post("/toClient", sendReviewToClient);
reviewsRoutes.get("/reviewsFromClient", getReviewsFromClient);

module.exports = reviewsRoutes;
