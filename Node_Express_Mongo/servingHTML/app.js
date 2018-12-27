const http = require("http");
const fs = require("fs");
/*
const myReadStream = fs.createReadStream(__dirname + "/readme.txt", "utf8");
const myWriteStream = fs.createWriteStream(__dirname + "/writeme.txt");

//recognize if we get first piece of data
myReadStream.on("data", chunk => {
  console.log("new chunk received: ");
  //write data chunk by chunk
  myWriteStream.write(chunk);
}); */

/*//do the same thing as the code above ^
myReadStream.pipe(myWriteStream);*/

//res object is a writable stream (so we can write to it)
const server = http.createServer((req, res) => {
  console.log("requestt was made: " + req.url);
  res.writeHead(200, { "Content-Type": "text/html" });
  const myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");
  myReadStream.pipe(res);
});

server.listen(3000, "127.0.0.1");
console.log("now we listening to port 3000");
