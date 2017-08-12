// decorator, that checks type of arguments

// function, that checks type of argument
function checkNum(value) {
  return typeof value == "number";
}

// funciton decorator, that checks types for function fn
// checks - an array with functions for check
function check(fn, checks) {
  return function() {
    for (var i = 0; i < arguments.length; i++) {
      if (!checks[i](arguments[i])) {
        console.log("Wrong type of argument: " + i);
        return;
      }
    }
    return console.log("Result of operation: " + fn.apply(this, arguments));
  }
}

//sum function
function sum() {
  var count = 0;
  for (var i = 0; i < arguments.length; i++) {
    count += arguments[i];
  }
  return count;
}

// wrap the decorator
sum = check(sum, [checkNum, checkNum, checkNum, checkNum]);


sum(2, 7, -5, 13); // Result of operation: 17
sum(2, 7, -5, "a"); // Wrong type of argument: 3
