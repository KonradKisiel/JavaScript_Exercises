//classes are ES6 feature, older browsers (eg. IE11) not suport them
class User{
    //function fired whonever we want create a new User instance
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }//in calsses we don't use commas
    login(){
        console.log(this.email, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}

// the 'new' keyword
// - creates a new emty object {}
// - sets the value of 'this' to be the new emty object
// - calls the constructor method

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');

//Method chaining (possible cause we use return on each method)
userOne.login().updateScore().updateScore().logout();
