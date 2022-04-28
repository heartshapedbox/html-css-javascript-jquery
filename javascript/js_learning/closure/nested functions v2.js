// Inside the function it can be possible to declare not just some local values but some other local functions
// Nested function can help to organize the code

var greeting = "Hello";

function sayHello(name) {
  // nested function
  function go() {
    console.log(greeting + ", " + name + "!");
  }
  // run the function
  go();
}


sayHello("John");
