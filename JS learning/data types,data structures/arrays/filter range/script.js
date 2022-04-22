// make a function filterRange(arr, a, b) that takes an array "arr" and returns "newArr" that contains the values in the range from "a" to "b"
// function should not change the array "arr"

var arr = [17, 2, 0, 5, 4, 3, 8, 10.2, 13];

function filterRange(arr, a, b) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (a <= arr[i] && arr[i] <= b) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(arr); // [ 17, 2, 0, 5, 4, 3, 8, 10.2, 13 ]
console.log(filterRange(arr, 3, 15)); // [ 5, 4, 3, 8, 10.2, 13 ]
