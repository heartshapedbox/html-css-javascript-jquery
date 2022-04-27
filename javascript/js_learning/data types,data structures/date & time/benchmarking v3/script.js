// We have two functions for solving the task
// Find out which function is faster
// For correct benchmarking each function should be run several times
// Use methods console.time(label) and console.timeEnd(label)


// create an array
var arr = [];
// add 100 "0" to the array
for (var i = 0; i < 100; i++) {
  arr[i] = 0;
}

// do some action with the array using "for...in loop" method
function usingForInLoop(arr) {
  for (var key in arr) {
    arr[key] *= 10;
  }
}

// do some action with the array using "for loop" method
function usingForLoop(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] *= 10;
  }
}

// get running time for each function
function getRunningTime(f) {
  // run each function 10000 times
  for (var j = 0; j < 10000; j++) {
    f(arr);
  }
}

console.time("usingForInLoop");
getRunningTime(usingForInLoop);
console.timeEnd("usingForInLoop"); // usingForInLoop: 114.432ms

console.time("usingForLoop");
getRunningTime(usingForLoop);
console.timeEnd("usingForLoop"); // usingForLoop: 2.009ms
