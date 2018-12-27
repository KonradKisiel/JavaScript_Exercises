const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const TodoSchema = new mongoose.Schema({
  item: String
});

//Create, and export Todo model
//const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo = mongoose.model("todos", TodoSchema);
