var book = document.querySelector('li:first-child .name');
//getting attribute
book.getAttribute('class');
book.getAttribute('href');
//adding attribute
book.setAttribute('class', 'name-2');
//checking if element has an attribute
book.hasAttribute('class');
book.hasAttribute('href');
//remove attribute
book.removeAttribute('class');
