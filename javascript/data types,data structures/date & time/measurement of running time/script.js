// measurement of running time

var start = new Date(); // start time

// do something
for (var i = 0; i < 1000000000; i++) {
  var doSomething = i * i * i;
}

var end = new Date(); // end time


console.log(end - start + "ms"); // 731ms
