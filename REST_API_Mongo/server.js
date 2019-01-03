const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/api");
const mongoose = require("mongoose");

const app = express();

//connect to mongoDB
mongoose.connect(
  "mongodb://localhost/devsDB",
  { useNewUrlParser: true }
);

//static files handling middleware
app.use(express.static("public"));
//json handling middleware
app.use(bodyParser.json());
//routes handling middleware
app.use("/api", routes);
//errors handling middleware
app.use((err, req, res, next) => {
  //console.log(err);
  res.status(422).send({ error: err.message });
});

app.listen(process.env.port || 3000, () => {
  console.log("listen to the port 3000");
});
