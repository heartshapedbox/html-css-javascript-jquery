// Get the length of each element from the array "arr" and push it into a new array "arrLength"
// Use a method "map"

var arr = ["Food", "Clothes", "Vehicle", "Buildings", "Water"];

var arrLength = [];

for (var i = 0; i < arr.length; i++) {
  arrLength[i] = arr[i].length;
}

console.log(arrLength); // [ 4, 7, 7, 9, 5 ]
