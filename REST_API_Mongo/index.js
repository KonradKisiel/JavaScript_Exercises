const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/api");

const app = express();

app.use(bodyParser.json());
app.use("/api", routes);

app.listen(process.env.port || 3000, () => {
  console.log("listen to the port 3000");
});
