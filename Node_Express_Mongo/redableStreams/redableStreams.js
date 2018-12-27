const http = require("http");
const fs = require("fs");

const myReadStream = fs.createReadStream(__dirname + "/readme.txt", "utf8");
//recognize if we get first piece of data
myReadStream.on("data", chunk => {
  console.log("new chunk received: ");
  console.log(chunk);
});
