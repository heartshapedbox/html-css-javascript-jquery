function User(firstName, lastName, age) {
  User.firstName = firstName;
  User.lastName = lastName;
  User.age = age;
  User.time = new Date();
  User.count++;
}


User.count = 0;


User.info = function() {
  return alert("User count: " + this.count + "\n" + "User name: " + this.firstName + " " + this.lastName + "\n" + "User age: " + this.age + "\n" + "Last session: " + this.time + "\n" + "---------------------------------------------------------");
};




new User("John", "Smith", 25);
User.info(); // User count: 1
// User name: John Smith
// User age: 25
// Last session: Thu Aug 10 2017 20:36:21 GMT+0300 (EEST)
// ---------------------------------------------------------

new User("Jane", "Stone", 19);
User.info(); // User count: 2
// User name: Jane Stone
// User age: 19
// Last session: Thu Aug 10 2017 20:36:22 GMT+0300 (EEST)
// ---------------------------------------------------------

new User("Jack", "Turner", 40);
User.info(); // User count: 3
// User name: Jack Turner
// User age: 40
// Last session: Thu Aug 10 2017 20:36:23 GMT+0300 (EEST)
// ---------------------------------------------------------
