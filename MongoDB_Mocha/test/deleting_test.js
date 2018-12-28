const assert = require("assert");
const MarioChar = require("../models/mariochar");

//dscribe what tests do, function with tests
describe("Deleting records", () => {
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
  it("Delete one record from the database", done => {
    MarioChar.findOneAndDelete({ name: "Mario" }).then(() => {
      MarioChar.findOne({ name: "Mario" }).then(result => {
        assert(result === null);
        done();
      });
    });
  });
});
