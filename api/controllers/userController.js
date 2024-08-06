const User = require("../models/userModel");
const appError = require("../utils/appError");
const asyncWrapper = require("../utils/asyncWrapper");
const JWT = require("jsonwebtoken");
const secret = process.env.JWT_SECRET_KEY;
const bcrypt = require("bcrypt");

const register = asyncWrapper(async (req, res, next) => {
  const { email, password, userName } = req.body;
  let token;
  const user = await User.findOne({ userName });
  const user2 = await User.findOne({ email });
  if (user) {
    const error = appError.create(
      "Fail",
      "This username Already Exist, Please Try Another One"
    );
    return next(error);
  }
  if (user2) {
    const error = appError.create("Fail", "this Email Already Exist");
    return next(error);
  }
  const hashedPassword = bcrypt.hashSync(password, 10);
  await User.create({
    email,
    userName,
    password: hashedPassword,
    courses: [],
  });
  try {
    token = await JWT.sign({ email, password }, secret);
  } catch (err) {
    return next(err);
  }
  res.cookie("token", token).json("Ok");
});

const login = asyncWrapper(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    const pass = bcrypt.compareSync(password, user.password);
    if (pass) {
      try {
        token = await JWT.sign({ email, password }, secret);
      } catch (err) {
        return next(err);
      }
      return res.cookie("token", token).json(user);
    } else {
      const error = appError.create("Fail", "Wrong Password");
      return next(error);
    }
  } else {
    const error = appError.create("Fail", "User Not Found");
    next(error);
  }
});

const logout = asyncWrapper(async (req, res, next) => {
  res.cookie("token", "").json("Ok");
});

const getMyProfile = asyncWrapper(async (req, res, next) => {
  const { token } = req.cookies;
  try {
    const { email } = await JWT.verify(token, secret);
    const user = await User.findOne({ email });
    res.json(user);
  } catch (err) {
    res.json(err);
  }
});

const getAllUsers = asyncWrapper(async (req, res, next) => {
  const users = await User.find({}, { __v: false });
  res.json(users);
});

const deleteUser = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  await User.findOneAndDelete({ _id: id });
  res.json("Ok");
});

module.exports = {
  register,
  login,
  logout,
  getMyProfile,
  getAllUsers,
  deleteUser,
};
