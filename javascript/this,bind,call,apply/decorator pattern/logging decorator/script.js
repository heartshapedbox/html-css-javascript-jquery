// logging decorator
// make a decorator makeLogging(fn, log), that takes function "fn" and an array "log". it returns wrapper for the function "fn", that for each call adds its arguments to the array "log".

// "make" function
function make() {
  var count = 0;
  for (var i = 0; i < arguments.length; i++) {
    count += arguments[i];
  }
  return console.log("Result: " + count); // Result: 28
}

// decorator
function makeLogging(fn, log) {
  return function wrapper() {
    var arg = [].slice.call(arguments);
    log.push(arg);
    return fn.apply(this, arguments);
  }
  return wrapper;
}

var log = [];

// wrap the decorator
make = makeLogging(make, log);


make(5, 2, 8, 13);


for (var i = 0; i < log.length; i++) {
  console.log("Log: " + log[i]); // Log: 5,2,8,13
}
