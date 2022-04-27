// Write function comparison() that takes the numbers from the array, sort them and return the array


var arr = [1, 23, 7, -2, 13];

function comparison(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
}

arr.sort(comparison);

console.log(arr); // [ -2, 1, 7, 13, 23 ]
