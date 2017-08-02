var user = {
  firstName: "John",
  lastName: "Smith",

  get fullName() {
    return this.firstName + " " + this.lastName;
  },

  set fullName(value) {
    var arr = value.split(" ");
    this.firstName = arr[0];
    this.lastName = arr[1];
  }
}

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
