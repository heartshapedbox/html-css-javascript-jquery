// caching decorator
// make the decorator makeCaching(fn), that takes function fn() and returns wrapper, that caching its result
// function sum() takes any number of arguments

// sum function
function sum() {
  var count = 0;
  for (var i = 0; i < arguments.length; i++) {
    count += arguments[i];
  }
  return count;
}

// decorator
function makeCaching(sum) {
  var res = {};
  return function(x) {
    x = [].slice.call(arguments);
    x = x.reduce(function(a, b) {
      return a + b;
    });

    if(!(x in res)) {
      res[x] = sum.call(this, x);
    }
    return res[x];
  }
}

// wrap function sum() in the decorator
sum = makeCaching(sum);

var a, b;

a = sum(1, 2, 5);
b = sum(1, 2, 5);
console.log(a); // 8
console.log(b); // 8
console.log(a == b); // true


b = sum(1, 2, 3);
console.log(b); // 6
console.log(a == b); // false
