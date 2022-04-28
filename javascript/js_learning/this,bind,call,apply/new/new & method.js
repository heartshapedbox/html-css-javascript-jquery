function User(name) {
  this.name = name;

  //add method
  this.sayHi = function() {
    alert("My name is " + this.name + "!");
  };
}


var user1 = new User("John");
var user2 = new User("Mike");
var user3 = new User("Jack");


user1.sayHi(); // My name is John!
user2.sayHi(); // My name is Mike!
user3.sayHi(); // My name is Jack!
