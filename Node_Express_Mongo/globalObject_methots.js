//https://nodejs.org/api/globals.html
console.log("test");

//Global object methods:
setTimeout(function() {
  console.log("3 seconds have passed");
}, 3000);

let time = 0;

let timer = setInterval(function() {
  time += 2;
  console.log(time + " seconds have passed");
}, 2000);

console.log(__dirname);
//directory+full filename
console.log(__filename);
