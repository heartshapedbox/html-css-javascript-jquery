// Two functions - one object
// Can objects "a" and "b" be equals? Yes, if they return the same object! Let's add object "data" for example.


// add object
var data = {
  firstName: "John",
  lastName: "Smith"
};


function A() {
  //function returns object, so "this" does not use
  return data;
}


function B() {
  //function returns object, so "this" does not use
  return data;
}


var a = new A();
var b = new B();


console.log(a == b); // true
console.log(a.firstName, a.lastName); // John Smith
console.log(b.firstName, b.lastName); // John Smith
