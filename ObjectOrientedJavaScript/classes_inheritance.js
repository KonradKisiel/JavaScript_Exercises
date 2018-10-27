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

//inherit from user
class Admin extends User{
    //if we haven't got a constructor in extended class we inherit it from basic one
    deleteUser(user){
        //filter() alows us to cycle for each method inside the array
        users = users.filter(u => {
            //checking if user.email is equal to the user.email passed in
            //if it is, delete that user
            return u.email != user.email;
        })
    }
}

// the 'new' keyword
// - creates a new emty object {}
// - sets the value of 'this' to be the new emty object
// - calls the constructor method

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
var admin = new Admin('shaun@ninjas.com', 'shaun');

var users = [userOne, userTwo, admin];

admin.deleteUser(userOne);
//ensure that deleteUser() is admin method only
userOne.deleteUser(admin);

console.log(users);


