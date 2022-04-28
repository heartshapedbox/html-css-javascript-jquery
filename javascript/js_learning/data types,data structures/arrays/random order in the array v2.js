// Make a function random() that sorts the elements from the array "arr" in random order

var arr = [1, 2, 3, 4, 5, 6, 7];

function random() {
  return Math.floor(Math.random() * arr.length);
}

arr.sort(random);

console.log(arr); // [ 2, 1, 3, 4, 7, 5, 6 ]
