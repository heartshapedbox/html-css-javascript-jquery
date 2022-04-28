// create an object "cloneUser" which is the copy of the object "user" and when it changes, the original object does not change

var user = {
  firstName: "John",
  lastName: "Smith",
  age: 23,
  occupation: "student"
};

var guest = user;
guest.firstName = "Jane";

// now we have 2 variables with the links for the same object
console.log(guest);
/*
firstName: 'Jane',
 lastName: 'Smith',
 age: 23,
 occupation: 'student' }
 */

console.log(user); // the same object as in "user"
 /*
 { firstName: 'Jane',
   lastName: 'Smith',
   age: 23,
   occupation: 'student' }
   */


// make a completely indepent empty object "cloneUser"
// copy all the keys form the object "user" to "cloneUser"
var cloneUser = {};
for (var key in user) {
  cloneUser[key] = user[key];
};

cloneUser.firstName = "Jack";
cloneUser.lastName = "Stone";

console.log(cloneUser); // now it is a new object
/*
{ firstName: 'Jack',
  lastName: 'Stone',
  age: 23,
  occupation: 'student' }
  */

console.log(user); // object is still the same
/*
{ firstName: 'Jane',
  lastName: 'Smith',
  age: 23,
  occupation: 'student' }
  */
