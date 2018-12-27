//normal function statement
function sayHi() {
  console.log("hi");
}
sayHi();

//function expression
let sayBye = function() {
  console.log("bye");
};
sayBye();

//calling function expression in function
function callFunction(fun) {
  fun();
}
callFunction(sayBye);
