const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const CourseCollection = require("./Data/Course.json");

app.get("/", (req, res) => {
  res.send("Now server is running");
});

app.get("/allCourse", (req, res) => {
  res.send(CourseCollection);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const getSingleItem = CourseCollection?.find((p) => p.id == id);
  if (!getSingleItem) {
    res.send("Course khuje pai nai");
  }
  res.send(getSingleItem);
});

app.get("/category/:name", (req, res) => {
  const name = req.params.name;
  const getCategory = CourseCollection?.filter((p) => p.category == name);
  res.send(getCategory);
});

app.listen(Port, () => {
  console.log("server is running", Port);
});

module.exports = app;