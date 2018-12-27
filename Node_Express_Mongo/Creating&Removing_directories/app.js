const fs = require("fs");

//delete a file
/*
fs.unlink("readme.txt", err => {
  if (err) console.log(err);
});

//create a directory sync
fs.mkdirSync("stuff");
//remove directory sync
fs.rmdirSync("stuff");
*/

//create directory async
fs.mkdir("stuff", err => {
  if (err) throw err;
});

fs.mkdir("stuff", err => {
  if (err) throw err;
  fs.readFile("readme.txt", (err, data) => {
    if (err) throw err;
    fs.writeFile("./stuff/writeMe.txt", (err, data) => {
      if (err) throw err;
    });
  });
});

//directory must be empty before being deleted
fs.unlink("./stuff/writeMe.txt", err => {
  if (err) throw err;
  fs.rmdir("stuff");
});
