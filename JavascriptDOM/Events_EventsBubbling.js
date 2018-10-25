//https://www.w3schools.com/Jsref/dom_obj_event.asp
var h2 = document.querySelector('#book-list h2');

//event listener and callback function, called when the click event happen
h2.addEventListener('click', function(e){
    //target  - shows which element is target of the event
    console.log('Target of click event')
    console.log(e.target);
    //printsout info about event parameters
    console.log('Event log')
    console.log(e);
    //one of the parameters is bool shiftKey
    console.log('Is the shift key pressed during click event: ', e.shiftKey);
});

//grab anchor tag
const link = document.querySelector('#page-banner a');

link.addEventListener('click', function(e){
    //prevent anchor tag from opening new website
    e.preventDefault();
    console.log('navigation to ', e.target.textContent, 'was prevented');
});

/*
//grab all delete buttons
var btns = document.querySelectorAll('#book-list .delete');

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    });
});
//better soluton below
*/

//li element is associated with ul element, so if we add new li element the code will be still working
const list = document.querySelector('#book-list ul');
list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});