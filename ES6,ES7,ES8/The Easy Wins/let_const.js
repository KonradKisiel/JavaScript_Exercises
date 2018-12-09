//old way of declaring variables
for (var i = 0; i <10; i++) {
	console.log('i in the loop is:', i);
}
//i is still accesible, output: 10
console.log("i after the loop:", i);

//********* HOISTING *********//
//js look for var in inner scope and move var in top of the function
var x = 0;
function child(){
	console.log(x); //output: undefined
	var x = 1;
	console.log(x); //output: i
}
child();

//******************************** LET ***********************************//
//let - block level variable, behave almost the same way that var does
//the difference is that it only last as long as the brackets do
for (let j = 0; j <10; j++) {
	console.log('i in the loop is:', j);
}
//i is not accesible, output: Error: i is not defined
console.log("i after the loop:", j);

//****************************//
let i = 10;
if(i === 10){
	let i =5;
	console.log(i); //output: 5
}
console.log(i);// output: 10

//**** NO HOISTING ******//
var y = 0;
function child(){
	console.log(y); //output: reference error
	let y = 1;
	console.log(y);
}
child();

//******************************** CONST ***********************************//
//CONST - is short for constant (u cannot asign variable again)
const = 1;
x = 2; //syntax error

//but you can change const without using equal an equal sign
const y = [1,2,3];
console.log(y);
y.push(4);
console.log(y);

//***** NO HOISTING *****//
function child(){
	console.log(z); //output: z is not defined
	let z = 1;
	console.log(z);
}
child();

//a good idea is to use const all the time, unless you're absolutely positive,
//that variable has to change, eg. in a for loop or a counter
