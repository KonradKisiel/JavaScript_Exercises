//getting collection of elements
var titles = document.getElementsByClassName('title');

//checking if element is an array
console.log(Array.isArray(titles));

//convert collection to array
console.log(Array.isArray(Array.from(titles)));

//forEach is use to looping through array, not collection
/*
titles.forEach(function(item){
    console.log(item);
})
*/
console.log("looping through titles")
Array.from(titles).forEach(function(item){
    console.log(item);
})

//selecting specific element using query selector
const wmf = document.querySelector('#book-list li:nth-child(2).name');
console.log(wmf);

//query selector does not return multiple elements
console.log('querySelector');
var book = document.querySelector('#book-list li .name');
console.log(book);

//but querySelectorAll does
console.log('querySelectorAll');
var booksArray = document.querySelectorAll('#book-list li .name');
console.log(booksCollection);

//if we use querySelectorAll instead getElementsByClassName we get array already
console.log('if we use querySelectorAll instead getElementsByClassName we get array already');
console.log(Array.isArray(Array.from(booksArray)));
booksArray.forEach(function(book){
    console.log(book);
});