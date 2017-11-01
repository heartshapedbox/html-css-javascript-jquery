// We have two functions for solving the task
// Find out which function is faster
// For correct benchmarking each function should be run several times

// create an array
var arr = [];
// add 100 "0" to the array
for (var i = 0; i < 100; i++) {
  arr[i] = 0;
}6

// do some action with the array using "for...in" method
function walkIn(arr) {
  for (var key in arr) {
    arr[key] *= 10;
  }
}

// do some action with the array using "loop" method
function walkLength(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] *= 10;
  }
}

// get running time for each function
function getRunningTime(f) {
  var start = performance.now();
  // run each function 10000 times
  for (var j = 0; j < 10000; j++) {
    f(arr);
  }
  var end = performance.now();
  return end - start;
}

alert(getRunningTime(walkIn) + " ms"); // 124.12500000000003 ms
alert(getRunningTime(walkLength) + " ms"); // 5.320000000001528 ms
