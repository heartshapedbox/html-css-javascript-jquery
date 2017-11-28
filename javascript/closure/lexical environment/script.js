// All variables inside a function are keys of the special internal object "LexicalEnvironment" which is created when function is launched

function sayHi(name){
  // lexical environment = {name: "John", output: undefined}
  var output = "Hello, " + name + "!";
  // lexical environment = {name: "John", output: "Hello, John!""}
  console.log(output); // Hello, John!
}


sayHi("John");
