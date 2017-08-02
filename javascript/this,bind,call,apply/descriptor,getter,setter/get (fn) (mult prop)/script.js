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
    },

    set: function(value) {
      var arr = value.split(" ");
      this.firstName = arr[0];
      this.lastName = arr[1];
    }
  }
})

var un = "User name: ";

console.log(un + user.fullName); // User name: John Smith
