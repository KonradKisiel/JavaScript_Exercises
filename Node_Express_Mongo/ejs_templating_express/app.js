const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //res.sendFile(__dirname + "/index.html");
  res.render("index");
});

app.get("/contact", (req, res) => {
  //res.sendFile(__dirname + "/contact.html");
  res.render("contact");
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
