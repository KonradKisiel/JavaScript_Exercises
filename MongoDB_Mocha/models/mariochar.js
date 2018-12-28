const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema and Model
const MarioCharSchema = new Schema({
  name: String,
  weight: Number
});

//'mariochar' is a collection name, mongoose automaticly pluralize collection name
const MarioChar = mongoose.model("mariochar", MarioCharSchema);

module.exports = MarioChar;
