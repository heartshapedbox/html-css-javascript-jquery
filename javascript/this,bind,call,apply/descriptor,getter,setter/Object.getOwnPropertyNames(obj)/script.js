// Object.getOwnPropertyNames returns an array of all object properties.

var user = {
  firstName: "John",
  lastName : "Smith",
  age: 25
};


Object.defineProperties(user, {
  firstName: {
    enumerable: false
  },

  lastName: {
    enumerable: false
  },

  age: {
    enumerable: false
  }
});


console.log(Object.getOwnPropertyNames(user)); // [ 'firstName', 'lastName', 'age' ]
