// Sort the array backward

var arr = [5, 2, 1, -10, 8];

function backwardComparison(a, b) {
  if (a < b) return 1;
  if (a > b) return -1;
}

arr.sort(backwardComparison);

console.log(arr); // [ 8, 5, 2, 1, -10 ]
