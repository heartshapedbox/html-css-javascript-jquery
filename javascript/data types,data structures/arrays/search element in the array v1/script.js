// make a function find(arr, value) that searches "value" in the array "arr" and if the value is found returns its number and "-1" if it is not

arr = ["test", true, 1.5, false, 7, "task", 13.2];

function find(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log(find(arr, 7)); // 4
console.log(find(arr, "task")); // 5
console.log(find(arr, true)); // 1
console.log(find(arr, "test")); // 0
console.log(find(arr, 13.2)); // 6
console.log(find(arr, 10)); // -1
