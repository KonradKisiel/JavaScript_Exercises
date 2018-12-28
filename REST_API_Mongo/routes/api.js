const express = require("express");
const router = express.Router();

//get a list of devs from the db
router.get("/devs", (req, res) => {
  res.send({ type: "GET" });
});

//add a new dev to the db
router.post("/devs", (req, res) => {
  console.log(req.body);
  res.send({
    type: "POST",
    name: req.body.name,
    rank: req.body.rank
  });
});

//update a dev in the db
router.put("/devs/:id", (req, res) => {
  res.send({ type: "PUT" });
});

//delete a dev from the db
router.delete("/devs/:id", (req, res) => {
  res.send({ type: "DELETE" });
});

module.exports = router;
