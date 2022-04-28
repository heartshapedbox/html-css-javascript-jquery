// Inside the function it can be possible to declare not just some local values but some other local functions
// Nested function can help to organize the code

function sayHelloBye(firstName, lastName) {
  console.log("Hello, " + getFullName() + "!"); // Hello, John Smith!
  console.log("Bye, " + getFullName() + "!"); // Bye, John Smith!

  // nested function
  function getFullName() {
    return firstName + " " + lastName;
  }
}

sayHelloBye("John", "Smith");
