const assert = require("assert");
const MarioChar = require("../models/mariochar");

//dscribe what tests do, function with tests
describe("Saving records", () => {
  //Create tests
  //each it block describes a test
  //if we async code is important to add done
  it("Saves a record to the database", done => {
    //if assertion is true, test will pass
    let char = new MarioChar({
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
});
