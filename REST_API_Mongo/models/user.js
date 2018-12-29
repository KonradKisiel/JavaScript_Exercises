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

//Create user Schema & Model
const UserSchema = new Schema({
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

const User = mongoose.model("user", UserSchema);

module.exports = User;
