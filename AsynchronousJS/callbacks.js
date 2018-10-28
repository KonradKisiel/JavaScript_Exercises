window.onload = function(){

    var fruits = ['bannana', 'apple', 'pear'];
    /*
    //callback function is a parameter for other methods, in this case forEach
    fruits.forEach(function(val){
        console.log(val);
    });
    */

    //synchronus callback returns before function returns

    function callback(value){
        console.log(value);
    }

    fruits.forEach(callback);
    
    console.log('done');

    //async callback

    var http = new XMLHttpRequest();

    http.onreadystatechange = function(){
        if(http.readyState == 4 && http.status == 200){
            console.log(JSON.parse(http.response));
        }
    };

    //REQUEST TO A SERVER
    //TYPE OF REQUEST, data url, BOOLEAN: true - if we want to be async / false if not
    http.open("GET", "data/tweets.json", true);
    //bring back data to a client
    http.send();

    //this code execute before data approach
    console.log("test");
};
