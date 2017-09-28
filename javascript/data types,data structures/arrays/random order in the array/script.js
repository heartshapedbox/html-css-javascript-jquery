// Make a function random() that sorts the elements from the array "arr" in random order

var arr = [1, 2, 3, 4, 5, 6, 7];

function random() {
  return Math.random() - 0.5;
}

arr.sort(random);

console.log(arr); // [ 3, 2, 5, 1, 4, 6, 7 ]
