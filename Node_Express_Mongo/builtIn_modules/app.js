const events = require("events");

//allowes us to create custom events
let myEmitter = new events.EventEmitter();

myEmitter.on("someEvent", function(msg) {
  console.log(msg);
});

myEmitter.emit("someEvent", "the event was emitted");

//util allowes objects to inherit properites
const util = require("util");
const Person = function(name) {
  this.name = name;
};

//every object creating using Person constructor inherit event emitter
//so we can add custom events to Person instances
util.inherits(Person, events.EventEmitter);

let James = new Person("James");
let Mary = new Person("Mary");
let Ryu = new Person("Ryu");
let people = [James, Mary, Ryu];

//add custom event listeners to each person
people.forEach(person => {
  person.on("speak", mssg => {
    console.log(person.name + " said: " + mssg);
  });
});

James.emit("speak", "hey dudes");
Ryu.emit("speak", "I want a curry");
