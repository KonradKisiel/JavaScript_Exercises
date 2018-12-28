const assert = require("assert");
const MarioChar = require("../models/mariochar");

//dscribe what tests do, function with tests
describe("Finding records", () => {
  let char;
  beforeEach(done => {
    char = new MarioChar({
      name: "Mario"
    });
    //mongoose save() is an async function
    char.save().then(() => {
      //check if data is saved corecly to the databse
      //isNew returns true when we created char localy, if it saved to db it is not new (so it is saved)
      assert(!char.isNew);
      done();
    });
  });
  //Create tests
  it("Find one record from the db by name", done => {
    MarioChar.findOne({ name: "Mario" }).then(result => {
      assert(result.name === "Mario");
      done();
    });
  });

  it("Find one record from the db by ID", done => {
    MarioChar.findOne({ _id: char._id }).then(result => {
      //cause we compare objects we need convert them to strings
      assert(result._id.toString() === char._id.toString());
      done();
    });
  });
});
