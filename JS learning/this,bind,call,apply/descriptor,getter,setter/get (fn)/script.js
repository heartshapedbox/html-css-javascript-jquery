function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  Object.defineProperty(this, "age", {
    get: function() {
      var currentYear = new Date().getFullYear();  // getFullYear() method returns the year of the specified date.
      return currentYear - this.birthday.getFullYear(); // getFullYear() method returns the year of the specified date.
    }
  });
}

var un = "User name: ";
var ub = "User bithday: ";
var ua = "User age: ";

var user1 = new User("John", new Date(1984, 2, 27));
alert(un + user1.name); // User name: John
alert(ub + user1.birthday); // User bithday: Tue Mar 27 1984 00:00:00 GMT+0300
alert(ua + user1.age); // User age: 33

var user2 = new User("Jane", new Date(1990, 9, 13));
alert(un + user2.name); // User name: Jane
alert(ub + user2.birthday); // User bithday: Sat Oct 13 1990 00:00:00 GMT+0300
alert(ua + user2.age); // User age: 27
