//hide books
const list = document.getElementById('book-list');
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