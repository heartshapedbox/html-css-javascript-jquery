// Get the length of each element from the array "arr" and push it into a new array "arrLength"
// Use a method "map"

var arr = ["Food", "Clothes", "Vehicle", "Buildings", "Water"];

var arrLength = [];

arrLength = arr.map(function(item) {
  return item.length;
});

console.log(arrLength); // [ 4, 7, 7, 9, 5 ]
