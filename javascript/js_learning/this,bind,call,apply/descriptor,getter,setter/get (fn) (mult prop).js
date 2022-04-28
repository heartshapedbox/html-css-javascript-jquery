var user = {
};


Object.defineProperties(user, {
  firstName: {
    value: "John"
  },

  lastName: {
    value: "Smith"
  },

  fullName: {
    get: function() {
      return this.firstName + " " + this.lastName;
    }
  }
})

var un = "User name: ";

alert(un + user.fullName); // User name: John Smith
