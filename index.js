const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const AllCourse = require("./Data/Course.json");
 const categories = require('./data/Category.json')
app.get("/", (req, res) => {
  res.send("Now server is running");
});

app.get("/allCourse", (req, res) => {
  res.send(AllCourse);
});

app.get('/AllCourse/:id', (req, res) => {
  const id = req.params.id
  const selectCourse = AllCourse.find(course => course._id == id);
  res.send(selectCourse)
})

app.get('/category/:id', (req, res) => {

  const categoryId = req.params.id;
  const category_Course = AllCourse.find(course => course.category_id == categoryId) ;
  res.send(category_Course)
})

app.get('/course-categories', (req,res) => {

  res.send(categories)
})



app.listen(Port, () => {
  console.log("server is running", Port);
});

module.exports = app;