// Write a function getSum(arr) that returns an array with its partial sums
// function should return "newArr" with the same number of elements in which at each position there should be the sum of the elements "arr" before this position inclusively

var arr = [5, 3, 2, 4, 5];
var newArr = [];

function getSum(arr) {
  for (var i = 0; i < arr.length; i++) {
    var currentArr = arr.slice(0, i + 1);
    newArr[i] = currentArr.reduce(function(a, b) {
      return a + b;
    });
  }
  return newArr;
}

console.log(arr); // [ 5, 3, 2, 4, 5 ]
console.log(getSum(arr)); // [ 5, 8, 10, 14, 19 ]
