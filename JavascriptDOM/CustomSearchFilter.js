//filter books
const list = document.querySelector('#book-list ul');
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
    //convert letters to lower case to ensure that search will be working properly
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');

    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        //indexOf(term) get position of string(term)
        //if there is no value equal to serch string return -1
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block';
        }else{
            book.style.display = 'none';
        }
    })
})