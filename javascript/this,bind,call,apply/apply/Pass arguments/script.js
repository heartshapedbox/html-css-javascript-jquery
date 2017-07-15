//Write function applyAll(func, arg1, arg2...), which gets function fn() and an arbitary number of arguments. Function applyAll() should pass all the arguments to the function fn() starting with 2nd argumnet and return the result...

function applyAll(fn) {
  arr = [].slice.call(arguments, 1);
  return fn.apply(this, arr);
}


function addition() {
  arguments.reduce = [].reduce;
  res = arguments.reduce(function(a, b) {
    return a + b;
  });
  return res;
}


function subtraction() {
  arguments.reduce = [].reduce;
  res = arguments.reduce(function(a, b) {
    return a - b;
  });
  return res;
}


function multiplication() {
  arguments.reduce = [].reduce;
  res = arguments.reduce(function(a, b) {
    return a * b;
  });
  return res;
}


function division() {
  arguments.reduce = [].reduce;
  res = arguments.reduce(function(a, b) {
    return a / b;
  });
  return res;
}



alert("Result of addition: " + applyAll(addition, 1, 2, 3)); // 6
alert("Result of subtraction: " + applyAll(subtraction, 1, 2, 3)); // -4
alert("Result of multiplication: " + applyAll(multiplication, 1, 2, 3)); // 6
alert("Result of division: " + applyAll(division, 1, 2, 3)); // 0.16666
