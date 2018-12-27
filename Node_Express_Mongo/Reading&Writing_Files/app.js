const fs = require("fs");
/*
//sync version of file reader, 'path to file'
let readMe = fs.readFileSync("readme.txt", "utf8");
console.log(readMe);
//writing a file sync
fs.writeFileSync("writeMe.txt", readMe);
*/

//async methods file, encoding, 3th parameter is callback function
fs.readFile("readme.txt", "utf8", (err, data) => {
  if (err) console.log(err);
  console.log(data);

  fs.writeFile("writeMe.txt", data, err => {
    if (err) console.log(err);
    console.log("It is saved!");
  });
});
