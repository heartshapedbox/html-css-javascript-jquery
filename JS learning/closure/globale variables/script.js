// every created function gets [[Scope]]
// variables declared within a function are local variables; variables declared outside a function are global
// when function is launched, creates a new object "LexicalEnvironment" which gets a reference on global object variables from [[Scope]]
// if local variables are not found, then global variables are seeked

var name = "John";

function sayHi(){
  // sayHi.[[Scope]] = window
  console.log(name); // John
}

sayHi();
// LexicalEnvironment = sayHi.[[Scope]]
// LexicalEnvironment = {name: "John"}
