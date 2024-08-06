const AdminReview = require("../models/adminReviewModel");
const clientReview = require("../models/clientReview");
const ClientReview = require("../models/clientReview");
const appError = require("../utils/appError");
const asyncWrapper = require("../utils/asyncWrapper");

const sendReviewToAdmin = asyncWrapper(async (req, res, next) => {
  const { content, where, createdBy } = req.body;
  await AdminReview.create({
    content,
    where,
    createdBy,
  });
  res.json("Ok");
});

const getReviewsFromAdmin = asyncWrapper(async (req, res, next) => {
  const reviews = await AdminReview.find({}, { __v: false });
  res.json(reviews);
});

const deleteReviewsFromAdmin = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  await AdminReview.findOneAndDelete({ _id: id });
  res.json("Ok");
});

const getSingleReview = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const review = await AdminReview.findOne({ _id: id });
  res.json(review);
});

const sendReviewToClient = asyncWrapper(async (req, res, next) => {
  const { content, where, createdBy } = req.body;
  await clientReview.create({
    content,
    where,
    createdBy,
  });
  res.json("Ok");
});

const getReviewsFromClient = asyncWrapper(async (req, res, next) => {
  const reviews = await ClientReview.find({}, { __v: false });
  res.json(reviews);
});

module.exports = {
  sendReviewToAdmin,
  getReviewsFromAdmin,
  sendReviewToClient,
  deleteReviewsFromAdmin,
  getSingleReview,
  getReviewsFromClient,
};
