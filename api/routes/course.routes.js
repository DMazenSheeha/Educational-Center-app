const express = require("express");
const asyncWrapper = require("../utils/asyncWrapper");
const {
  addCourse,
  getAllCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");
const courseRoutes = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

courseRoutes
  .route("/courses")
  .post(upload.single("image"), addCourse)
  .get(getAllCourses);
courseRoutes
  .route("/courses/:id")
  .get(getSingleCourse)
  .put(upload.single("image"), updateCourse)
  .delete(deleteCourse);

module.exports = courseRoutes;
