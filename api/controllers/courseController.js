const Course = require("../models/courseModel");
const appError = require("../utils/appError");
const asyncWrapper = require("../utils/asyncWrapper");
const fs = require("fs");

const getAllCourses = asyncWrapper(async (req, res, next) => {
  const courses = await Course.find({}, { __v: false });
  res.json(courses);
});

const getSingleCourse = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const course = await Course.findOne({ _id: id }, { __v: false });
  res.json(course);
});

const addCourse = asyncWrapper(async (req, res, next) => {
  const file = req.file;
  const { name, description } = req.body;
  const newPath = `${file.filename}.${file.originalname.split(".")[1]}`;
  fs.renameSync(`uploads/${file.filename}`, `uploads/${newPath}`);
  await Course.create({
    name,
    description,
    image: newPath,
  });
  res.json("Ok");
});

const updateCourse = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const file = req.file;
  let newPath;
  if (file) {
    newPath = `${file.filename}.${file.originalname.split(".")[1]}`;
    fs.renameSync(`uploads/${file.filename}`, `uploads/${newPath}`);
  }
  const course = await Course.findOne({ _id: id });
  await Course.findOneAndUpdate(
    { _id: id },
    {
      name,
      description,
      image: newPath ? newPath : course.image,
    }
  );
  res.json("Ok");
});

const deleteCourse = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  await Course.findOneAndDelete({ _id: id });
  res.json("Ok");
});

module.exports = {
  addCourse,
  getAllCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse,
};
