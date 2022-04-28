// Sort the array backward

var arr = [5, 2, 1, -10, 8];

function backwardComparison(a, b) {
  return b - a;
}

arr.sort(backwardComparison);

console.log(arr); // [ 8, 5, 2, 1, -10 ]
