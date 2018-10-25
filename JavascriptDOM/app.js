//interacting with forms
//creating colecton of forms from the document
var forms = document.forms;

//accessing to the first form using index
console.log('accessing to the first form using index: ',document.forms[0]);
//accessing to the first form using id
console.log('accessing to the first form using id: ',document.forms['search-books']);

const list = document.querySelector('#book-list ul');

//delete books
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

    //add clases
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

