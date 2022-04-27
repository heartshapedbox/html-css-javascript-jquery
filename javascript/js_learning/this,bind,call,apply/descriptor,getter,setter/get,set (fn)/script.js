var user = {
  firstName: "John",
  lastName: "Smith",
};


Object.defineProperty(user, "fullName", {
  get: function() {
    return this.firstName + " " + this.lastName;
  },

  set: function(value) {
    var arr = value.split(" ");
    this.firstName = arr[0];
    this.lastName = arr[1];
  }
});

var first = "User first name: ";
var last = "User last name: ";
var full = "User full name: ";

alert(first + user.firstName); // User first name: John
alert(last + user.lastName); // User last name: Smith
alert(full + user.fullName); // User full name: John Smith


user.fullName = "Jane Stone";
alert(first + user.firstName); // User first name: Jane
alert(last + user.lastName); // User last name: Stone
alert(full + user.fullName); // User full name: Jane Stone


user.fullName = "Jack Turner";
alert(first + user.firstName); // User first name: Jack
alert(last + user.lastName); // User last name: Turner
alert(full + user.fullName); // User full name: Jack Turner
