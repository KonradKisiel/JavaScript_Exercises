const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// create application/x-www-form-urlencoded parser
//can be use with POST request to parse data from form
const urlencodedParser = bodyParser.urlencoded({ extended: false });

//add ejs MVC view engine
app.set("view engine", "ejs");

//use this middleware in every request
//we can attach it to a certain route
//express.static alowes us to serve static files
app.use("/assets", express.static("assets"));

app.get("/", (req, res) => {
  //res.sendFile(__dirname + "/index.html");
  res.render("index");
});

app.get("/contact", (req, res) => {
  //res.sendFile(__dirname + "/contact.html");
  res.render("contact", { qs: req.query });
});

//urlencodedParser parse form data
app.post("/contact", urlencodedParser, (req, res) => {
  console.log(req.body);
  res.render("contact-sucess", { data: req.body });
});

app.get("/profile/:name", (req, res) => {
  // res.send("You requsted to see a profile with the name of " + req.params.name);
  let data = {
    age: 29,
    job: "ninja",
    hobbies: ["eating", "fighting", "fishing"]
  };
  //render ejs view, passing data to a view (in view can use person property)
  res.render("profile", { person: req.params.name, data: data });
});

app.listen(3000);
