const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("requestt was made: " + req.url);
  res.writeHead(200, { "Content-Type": "application/json" });
  let myObj = {
    name: "Ryu",
    job: "Ninja",
    age: 29
  };
  //send data back to the client
  res.end(JSON.stringify(myObj));
});

server.listen(3000, "127.0.0.1");
console.log("now we listening to port 3000");
