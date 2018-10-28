window.onload = function(){

    //this code alowes us to get data back from a server
    var http = new XMLHttpRequest();

    //listen when state changes has been made
    //function fire every time when ajax ready state has hanging
    http.onreadystatechange = function(){
        console.log(http);
        //do something when data is transfered sucesffuly
        if(http.readyState == 4 && http.status == 200){
            //JSON.pars - parse string to an object, which more easy to use
            console.log(JSON.parse(http.response));
        }
    };

    //REQUEST TO A SERVER
    //TYPE OF REQUEST, data url, BOOLEAN: true - if we want to be async / false if not
    http.open("GET", "data/tweets.json", true);
    //bring back data to a client
    http.send();
    console.log(http);

};

/* READY STATES

0 - request not initialized
1 - request has been set up
2 - request has been sent
3 - request is in process
4 - request is complete

*/