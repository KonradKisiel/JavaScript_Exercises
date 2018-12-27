const http = require("http");

const server = http.createServer((req, res) => {
  console.log("requestt was made: " + req.url);
  //status, content type
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Elo");
});

server.listen(3000, "127.0.0.1");
console.log("now we listening to port 3000");
