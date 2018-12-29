const express = require("express");
const router = express.Router();
const User = require("../models/user");

//get a list of devs from the db
router.get("/devs", (req, res, next) => {
  /*Ninja.find({}).then(users => {
    res.send(users);
  });
  User.geoNear(
    //parseFloat change float to string
    {
      type: "Point",
      coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
    },
    { maxDistance: 100000, spherical: true }
  ).then(users => {
    res.send(users);
  });*/

  User.aggregate()
    .near({
      type: "Point",
      near: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
      maxDistance: 100000,
      spherical: true,
      distanceField: "dis"
    })
    .then(users => {
      res.send(users);
    });
});

//add a new dev to the db
router.post("/devs", (req, res, next) => {
  /*
  const user = new User(req.body);
  user.save();
  */
  //mongoose method shorter than code above
  User.create(req.body)
    .then(user => {
      res.send(user);
    })
    .catch(next);
});

//update a dev in the db
router.put("/devs/:id", (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(user => {
    res.send(user);
  });
});

//delete a dev from the db
router.delete("/devs/:id", (req, res, next) => {
  User.findByIdAndDelete(req.params.id).then(user => {
    res.send(user);
  });
});

module.exports = router;
