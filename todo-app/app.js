// app.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Todo = require("./models/Todo");

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/todoDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Set EJS as the view engine
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routes
app.get("/", async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.render("index", { todos });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error loading todos");
  }
});

app.post("/add", async (req, res) => {
  const task = req.body.task;
  if (task) {
    const newTodo = new Todo({
      task: task,
    });
    await newTodo.save();
  }
  res.redirect("/");
});

app.post("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.redirect("/");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
