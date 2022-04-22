// Merge all objects to new one
// Object "newUser" should not be changed
// Use a method "arguments"

// object "newUser"
var newUser = {
  name: "John",
  age: 25
};

// object "access"
var access = {
  isRegistered: true,
  hasSubscription: true
};

// object "status"
var status = {
  occupation: "student"
};

// create a new empty object "registeredUser"
var registeredUser = {};

// clone the object "newUser"
for (var key in newUser) {
  registeredUser[key] = newUser[key];
}

// function copy() that copies all keys from objects ("access", "status") into the new object "registeredUser"
function copy() {
  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i];

    for (var key in arg) {
      registeredUser[key] = arg[key];
    }
  }
  return registeredUser;
}

// run the function
copy(access, status);
console.log(registeredUser);

/*
{ name: 'John',
  age: 25,
  isRegistered: true,
  hasSubscription: true,
  occupation: 'student' }
*/
