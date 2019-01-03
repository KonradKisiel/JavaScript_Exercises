const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create geolocation Schema, based on http://geojson.org/
const GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    //use sphere cordinates
    index: "2dsphere"
  }
});

//Create dev Schema & Model
const DevSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required"]
  },
  skillsLevel: {
    type: Number
  },
  available: {
    type: Boolean,
    default: false
  },
  geometry: GeoSchema
});

const Dev = mongoose.model("dev", DevSchema);

module.exports = Dev;
