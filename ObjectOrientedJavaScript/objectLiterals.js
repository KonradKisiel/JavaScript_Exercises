//encapsulating data inside the object
var userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    //ES6 shortcut
    //login(){}
    login: function(){
        //this refers to the object(userOne)
        console.log(this.email, 'has logged in');
    },
    logout: function(){
        console.log(this.email, 'has logged out');
    }
};

//updating property
userOne.name = 'Yoshi';
//another way to update property, this way is dynamic
userOne['name'] = 'Mario';
//to print it out we can use userOne.name or userOne['name']

//dynamic example of hanging object properties
var prop = 'name';
//printout name
console.log(userOne[prop]);
prop = 'email';
//printout email
console.log(userOne[prop]);

//creating new property to existing obj
userOne.age = 25;