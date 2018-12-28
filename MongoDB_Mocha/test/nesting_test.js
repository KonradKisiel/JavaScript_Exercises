const assert = require("assert");
const mongoose = require("mongoose");
const Author = require("../models/author");

//describe test
describe("Nesting records", () => {
  beforeEach(done => {
    mongoose.connection.collections.authors.drop(() => {
      done();
    });
  });

  //Create tests
  it("Create an author with sub-books", done => {
    let pat = new Author({
      name: "Patric Rothfuss",
      books: [{ title: "Name of the Wind", pages: 400 }]
    });
    pat.save().then(() => {
      Author.findOne({ name: "Patric Rothfuss" }).then(record => {
        assert(record.books.length === 1);
        done();
      });
    });
  });

  it("Adds a book to an author", done => {
    let pat = new Author({
      name: "Patric Rothfuss",
      books: [{ title: "Name of the Wind", pages: 400 }]
    });
    pat.save().then(() => {
      Author.findOne({ name: "Patric Rothfuss" }).then(record => {
        //add a book to the books array
        record.books.push({ title: "Wise Man's Fear", pages: 500 });
        record.save().then(() => {
          Author.findOne({ name: "Patric Rothfuss" }).then(result => {
            assert(result.books.length === 2);
            done();
          });
        });
      });
    });
  });
});
