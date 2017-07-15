// apply() method allows us to perform a callback function in the context of the passed object.

var clientData = {
  id: 1234094,
  fullName: "",
  setFullName: function(firstName, lastName) {
    this.fullName = firstName + " " + lastName;
  }
};


function getFullName(a, b, firstName, lastName) {
    a.apply(b, [firstName, lastName]);
  }



getFullName(clientData.setFullName, clientData, "John", "Smith");



console.log(clientData.fullName);
