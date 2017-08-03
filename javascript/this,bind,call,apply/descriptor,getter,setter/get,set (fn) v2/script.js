// Do so that the properties "firstName" and "lastName" would be available not only for reading, but also for writing

function User(fullName) {
  this.fullName = fullName;

  Object.defineProperties(this, {
    firstName: {
      get: function() {
        return this.fullName.split(" ")[0];
      },

      set: function(value) {
        var arr = value.split(" ");
        arr[0] = value;
        this.fullName = value + " " + this.lastName;
      }
    },

    lastName: {
      get: function() {
        return this.fullName.split(" ")[1];
      },

      set: function(value) {
        var arr = value.split(" ");
        arr[1] = value;
        this.fullName = this.firstName + " " + value;
      }
    }
  });
}


var user = new User("Jane Stone");
console.log(user.fullName); // Jane Stone
console.log(user.firstName); // Jane
console.log(user.lastName); // Stone


user.lastName = "Smith";
console.log(user.fullName); // Jane Smith
