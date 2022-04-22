// measurement of running time

var start = performance.now(); // start time

// do something
for (var i = 0; i < 1000000; i++) {
  var doSomething = i * i * i;
}

var end = performance.now(); // end time


alert(end - start + "ms"); // 31.909999999999997ms
