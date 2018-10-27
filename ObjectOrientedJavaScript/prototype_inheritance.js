//creating constructor function, this function represents "class", it creates user obj
function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
    /*
    this.login = function(){
        console.log(this.email, 'has logged in');
    }
    */
}
//__proto__ methods are stored in Object Prototype, when we create instance of that obj it can "borrow" that methods
//using protypes is more efficient than creating new methods with new objs
//only constructor function has property prototype
//below we define User.prototype.login method insted create it on User constructor
User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in');
}

User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged out');
}

//...args takes parameters and put them in to an array
//Admin inheritence from User
function Admin(...args){
    User.apply(this, args);
    this.role = 'super admin';
}
//methods inheritance from User
Admin.prototype = Object.create(User.prototype);
//adding extra method to the admin
Admin.prototype.deleteUser = function(u){
    //filter() alows us to cycle for each method inside the array
    users = users.filter(user => {
        //checking if user.email is equal to the user.email passed in
        //if it is, delete that user
        return user.email != u.email;
    })
};

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
var admin = new Admin('shaun@ninjas.com', 'Shaun');

var users = [userOne, userTwo, admin];

console.log(admin);


