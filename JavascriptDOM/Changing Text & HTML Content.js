var booksArray = document.querySelectorAll('#book-list li .name');

//getting text from elements
booksArray.forEach(function(book){
    console.log(book.textContent);
});

/*
//changing text inside elements
booksArray.forEach(function(book){
    book.textContent = 'test';
});
*/

//append text to existing texts
booksArray.forEach(function(book){
    book.textContent += ' (book title)';
});

//getting HTML element
const bookList = document.querySelector('#book-list');
console.log(bookList.innerHTML);

//replacing HTML element
bookList.innerHTML = '<h2>Books and more books...</h2>';
//append HTML
bookList.innerHTML += '<p>This is how you add HTML</p>';