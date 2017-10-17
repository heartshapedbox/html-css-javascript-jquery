// Method "arr.filter" is used for filtering the array

var arr = ["element1", "element2", 1, 2, 3];

arr = arr.filter(function(arg) {
  return typeof arg == "number";
});

console.log(arr); // [ 1, 2, 3 ]
