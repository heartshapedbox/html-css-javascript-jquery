// decorator, that measures operation time of the function

// timer
var timer = {};

// decorator
function timingDecorator(fn, time) {
  return function() {
    var start = performance.now();
    var res = fn.apply(this, arguments);

    if(!timer[time]) {
      timer[time] = 0;
      timer[time] += performance.now() - start;
    }
    return res;
  }
}

// sum function
var sum = function(n) {
  return n + n;
}


var getResult = timingDecorator(sum, "time");


alert("Result of operation: " + getResult(5)); // 10
alert("Time of operation: " + timer.time + " ms"); // 0.09000000034 ms
