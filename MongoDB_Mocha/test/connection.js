const mongoose = require("mongoose");

//hook (before) is a section of code which is run before (or after) run a test
// Connect to the db before test run
before(done => {
  // Connect to mongodb
  mongoose.connect(
    "mongodb://localhost/testaroo",
    { useNewUrlParser: true }
  );

  //once is event listener
  mongoose.connection
    .once("open", () => {
      console.log("Connection has been made...");
      done();
    })
    .on("error", err => {
      throw err;
    });
});

//Drop the characters collection before each test
beforeEach(done => {
  //Drop the collection
  mongoose.connection.collections.mariochars.drop(() => {
    //when collection is dropped, now we can perform a test
    done();
  });
});

//close cli
after(() => setTimeout(() => process.exit(), 1000));
