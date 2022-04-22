// Object.keys(obj) returns an array of object properties.

// user ----------------------------
var user = {
  firstName: "John",
  lastName: "Smith",
  age: 25
};


Object.defineProperties(user, {
  firstName: {
    enumerable: true
  },

  lastName: {
    enumerable: true
  },

  age: {
    enumerable: true
  }
});



// user2 ----------------------------
var user2 = {
  firstName: "Jane",
  lastName: "Stone",
  age: 19
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


console.log(Object.keys(user)); // [ 'firstName', 'lastName', 'age' ]
console.log(Object.keys(user2)); // []
