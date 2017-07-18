var user = {
  firstName: "John",
  lastName: "Smith",

  output: function() {
    alert("Hello, " + this.firstName + " " + this.lastName + "!");
  }
};


setTimeout(user.output.bind(user), 2000);
