const bookList = document.querySelector('#book-list');

//https://stackoverflow.com/questions/8685739/difference-between-dom-parentnode-and-parentelement
//parentNode and parentElement behaviour is almost the same

//traversing upwards DOM elements
console.log('#book-list parent node is:', bookList.parentNode);
console.log('#book-list parent element x2 is:', bookList.parentElement.parentElement);

//traversing  downwards DOM elements
//.childNodes show all text nodes
console.log('#book-list child nodes is:', bookList.childNodes);
//.children doesn't show line breaks
console.log('#book-list child element is:', bookList.children);

//next sibling
//most nested element
console.log('book-list next sibling is:', bookList.nextSibling);
//nearest next element
console.log('book-list next element sibling is:', bookList.nextElementSibling);

//previous sibling
//most nested element
console.log('book-list next sibling is:', bookList.previousSibling);
//nearest previous element
console.log('book-list next element sibling is:', bookList.previousElementSibling);


//search for element inside the sibling element
bookList.previousElementSibling.querySelector('p').innerHTML += '<br/>Too cool for everyone else!';