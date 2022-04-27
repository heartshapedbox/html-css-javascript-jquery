function User() {
  this.sayHi = function() {
    console.log("Hello, " + this.name + "!");
  }
}


User.createGuest = function() {
  var user = new User;
  user.name = "guest";
  return user;
}


User.createUser = function(data) {
  var user = new User;
  user.name = data.name;
  user.age = data.age;
  return user;
}


var newUser = User.createGuest();
newUser.sayHi(); // Hello, guest!


var newUser = User.createUser({
  name: "John",
  age: 25
});
newUser.sayHi(); // Hello, John!
