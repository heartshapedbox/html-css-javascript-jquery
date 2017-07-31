var data = {
  firstName: "John",
  lastName: "Smith",

  toString: function() {
    return "User: " + this.firstName + " " + this.lastName + "\n" + "Login time: " + new Date;
  }
}


setTimeout(function() {
  alert(data);
}, 2000);
