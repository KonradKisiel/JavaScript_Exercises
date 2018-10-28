window.onload = function(){
    function get(url){
        //Promise - ES6 feature, lack of support for IE11 and below
        return new Promise(function(resolve, reject){
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", url, true);
            xhttp.onload = function(){
                if(xhttp.status == 200){
                    resolve(JSON.parse(xhttp.response));
                }else{
                    reject(xhttp.statusText);
                }
            };
            xhttp.onerror = function(){
                reject(xhttp.statusText);
            };
            xhttp.send();
        });
    }

    //promise is a placeholder for data that will be received
    var promise = get("data/tweets.json");
    promise.then(function(tweets){
        console.log(tweets);
        //when the first promise is fullfiled we can for the next one
        return get("data/friends.json");
        //catching error
    }).then(function(friends){
        console.log(friends);
        //if previous promiises are fulfiled call for video data
        return get("data/videos.json");
    }).then(function(videos){
        console.log(videos);
    }).catch(function(error){
        console.log(error);
    });

};

