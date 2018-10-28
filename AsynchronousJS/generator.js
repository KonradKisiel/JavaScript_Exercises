window.onload = function(){
        //function* - generator ES6 feature, lack of support for IE11 and below
        function* gen(){
            //yield pause code
            var x = yield 10;
            console.log(10);
        }

        //myGen is an iterable object, we can use next method on it
        var myGen = gen();
        //we stop at value: 10, done: false
        console.log(myGen.next());
        //done is true only if we reach the end of the code
        console.log(myGen.next());
};

