const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//Load Todo model
const Todo = require("../models/Todo");

//Connect to the database
mongoose.connect(
  //register to https://mlab.com and crete free mongoDB database,
  { useNewUrlParser: true }
);

const urlencodedParser = bodyParser.urlencoded({ extended: true });

//passing express app to todoController function in app.js
module.exports = app => {
  //request handlers
  app.get("/todo", (req, res) => {
    //get data from mongodb and pass it to a view
    //find specific object in a collection
    //if we use {} return all obj in collection
    Todo.find({}, (err, data) => {
      if (err) throw err;
      res.render("todo", { todos: data });
    });
  });

  app.post("/todo", urlencodedParser, (req, res) => {
    //get data from the view and add it to mongodb
    let newTodo = Todo(req.body).save((err, data) => {
      if (err) throw err;
      res.json(data);
    });
  });

  app.delete("/todo/:item", (req, res) => {
    //delete the requested item from mongodb
    //replace url separators with spaces(" ")
    Todo.find({ item: req.params.item.replace(/\-/g, " ") }).deleteOne(
      (err, data) => {
        if (err) throw err;
        res.json(data);
      }
    );
  });
};
