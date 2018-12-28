const assert = require("assert");
const MarioChar = require("../models/mariochar");

describe("Updating records", () => {
  let char;
  beforeEach(done => {
    char = new MarioChar({
      name: "Mario",
      weight: 50
    });
    char.save().then(() => {
      assert(!char.isNew);
      done();
    });
  });
  //Create tests
  it("Update one record in the database", done => {
    //second parameter is what we want to change
    MarioChar.findOneAndUpdate({ name: "Mario" }, { name: "Luigi" }).then(
      () => {
        MarioChar.findOne({ _id: char._id }).then(result => {
          assert(result.name === "Luigi");
          done();
        });
      }
    );
  });

  it("Increment the weight by 1", done => {
    //$ is an increment operator, increment weight by 1
    MarioChar.updateMany({}, { $inc: { weight: 1 } }).then(() => {
      MarioChar.findOne({ name: "Mario" }).then(record => {
        assert(record.weight === 51);
        done();
      });
    });
  });
});
