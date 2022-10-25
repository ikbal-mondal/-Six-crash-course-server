const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const AllCourseCollection = require("./Data/Course.json");
 const categories = require('./data/Category.json')
app.get("/", (req, res) => {
  res.send("Now server is running");
});

app.get("/allCourse", (req, res) => {
  res.send(AllCourseCollection);
});

app.get('/course-categories', (req,res) => {

  res.send(categories)
})



app.listen(Port, () => {
  console.log("server is running", Port);
});

module.exports = app;