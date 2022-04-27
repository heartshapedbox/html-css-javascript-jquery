// The value of the variable from the global scope is always current value

var phrase = "Hello"; // primary value

function sayHi(name) {
  console.log(phrase + ", " + name + "!");
}

sayHi("John"); // Hello, John!

phrase = "Buy"; // current value

sayHi("John"); // Buy, John!
