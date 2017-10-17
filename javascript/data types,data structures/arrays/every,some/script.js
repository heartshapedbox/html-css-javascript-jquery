// Methods "every" and "some" are used for checking the array

var arr = ["element1", "element2", "element3", 1, 2, 3];

var everyNum = arr.every(function(arg) {
  return typeof arg == "number";
});
console.log(everyNum); // false


var everyStr = arr.every(function(arg) {
  return typeof arg == "string";
});
console.log(everyStr); // false


var someNum = arr.some(function(arg) {
  return typeof arg == "number";
});
console.log(someNum); // true

var someStr = arr.some(function(arg) {
  return typeof arg == "string";
});
console.log(someStr); // true
