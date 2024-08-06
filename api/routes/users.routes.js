const express = require("express");
const {
  register,
  login,
  logout,
  getAllUsers,
  getMyProfile,
  deleteUser,
} = require("../controllers/userController");
const userRoutes = express.Router();

userRoutes
  .get("/users", getAllUsers)
  .delete("/users/:id", deleteUser)
  .post("/register", register)
  .post("/login", login)
  .post("/logout", logout)
  .get("/profile", getMyProfile);

module.exports = userRoutes;
