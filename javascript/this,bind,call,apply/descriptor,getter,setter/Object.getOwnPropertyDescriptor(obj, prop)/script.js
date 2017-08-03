// Object.getOwnPropertyDescriptor(obj, prop) returns descriptor for obj[prop].

var user = {
  firstName: "Jane",
  lastName: "Stone",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

var descriptor = Object.getOwnPropertyDescriptor(user, "lastName");

// change "value" on "getter"
delete descriptor.value; // delete value
delete descriptor.writable; // delete writable
descriptor.get = function() {
  return this.lastName = "Smith";
};


// set new prop instead of old one
Object.defineProperty(user, "lastName", descriptor);


console.log(user.fullName()); // Jane Smith
