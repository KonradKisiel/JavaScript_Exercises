const express = require("express");
const router = express.Router();
const Dev = require("../models/dev");

//get a list of devs from the db
router.get("/devs", (req, res, next) => {
  /*Ninja.find({}).then(devs => {
    res.send(devs);
  });
  Devs.geoNear(
    //parseFloat change float to string
    {
      type: "Point",
      coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
    },
    { maxDistance: 100000, spherical: true }
  ).then(devs => {
    res.send(devs);
  });*/

  Dev.aggregate()
    .near({
      type: "Point",
      near: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
      maxDistance: 100000,
      spherical: true,
      distanceField: "dis"
    })
    .then(devs => {
      res.send(devs);
    });
});

//add a new dev to the db
router.post("/devs", (req, res, next) => {
  /*
  const devs = new Dev(req.body);
  devs.save();
  */
  //mongoose method shorter than code above
  Dev.create(req.body)
    .then(devs => {
      res.send(devs);
    })
    .catch(next);
});

//update a dev in the db
router.put("/devs/:id", (req, res, next) => {
  Dev.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(devs => {
    res.send(devs);
  });
});

//delete a dev from the db
router.delete("/devs/:id", (req, res, next) => {
  Dev.findByIdAndDelete(req.params.id).then(devs => {
    res.send(devs);
  });
});

module.exports = router;
