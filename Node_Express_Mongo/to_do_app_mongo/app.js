const express = require("express");
const todoController = require("./controllers/todoController");

const app = express();

//add path to views
//app.set("views", __dirname + "/controllers/views");

//set up template engine
app.set("view engine", "ejs");

//sttic files
app.use(express.static("./public"));

//fire controllers
todoController(app);

//listen to port
app.listen(3000);

console.log("Listening to port 3000");
