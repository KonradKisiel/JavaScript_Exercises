//wait for the end of loading DOM content
document.addEventListener('DOMContentLoaded', function(){

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

//delete a book
list.addEventListener('click',function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

//add book-list
const addForm = document.forms['add-book'];
//add submit event to it
addForm.addEventListener('submit', function(e){
    //prevent default behaviour
    e.preventDefault();
    //geting value of the input field
    const value = addForm.querySelector('input[type="text"]').value;
    //console.log(value);

    //********************** CREATE ELEMEMENTS *********************** */
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    //add content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    //append to document (adding elements)
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li)
});

//hide books
//get id of the hideBox
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
        list.style.display = "none";
    }else{
        //insted of use initial we also can use block
        list.style.display = "initial";
    }
})

//tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');

tabs.addEventListener('click', function(e){
    if(e.target.tagName =="LI"){
        const targetPanel = document.querySelector(e.target.dataset.target)
        panels.forEach(function(panel){
            if(panel == targetPanel){
                panel.classList.add('active');
            }else{
                panel.classList.remove('active');
            }
        })
    }
})
})

