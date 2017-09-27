// Make a function filter(arr, a, b) that takes the array "arr" and removes all numbers in range (a-b) from it. The function should changes the array itself and should returns nothing

var arr = [1, 18, 7, 2, 11, 13, 4, 10];

function filter(arr, a, b) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

filter(arr, 2, 10);
console.log(arr); // [ 7, 2, 4, 10 ]
