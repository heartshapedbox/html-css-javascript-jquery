function User(firstName, lastName) {
  // auxiliary variable
  var greeting = "Hello, ";

  //auxiliary function
  function getFullName() {
    return firstName + " " + lastName;
  };

  this.sayHi = function() {
    alert(greeting + getFullName() + "!");
  };
}


var user1 = new User("John", "Smith");
var user2 = new User("Mike", "Stone");
var user3 = new User("Jack", "Swift");


user1.sayHi(); // Hello, John Smith!
user2.sayHi(); // Hello, Mike Stone!
user3.sayHi(); // Hello, Jack Swift!
