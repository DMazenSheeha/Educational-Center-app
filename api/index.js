require("dotenv").config();
const url = process.env.MONGODB_URL;
const port = process.env.PORT;
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/users.routes");
const courseRoutes = require("./routes/course.routes");
const path = require("path");
const reviewsRoutes = require("./routes/reviews.routes");
const app = express();

mongoose.connect(url).then(() => {
  console.log("Connected With Mongodb");
});

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173", "http://localhost:5174"],
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/", userRoutes);
app.use("/", courseRoutes);
app.use("/", reviewsRoutes);

app.use((err, req, res, next) => {
  if (err) {
    res.json({
      status: err.status || "Error",
      message: err.message,

      code: err.code || 400,
    });
  }
});

app.listen(port, () => {
  console.log(`Run On Port ${port}`);
});
