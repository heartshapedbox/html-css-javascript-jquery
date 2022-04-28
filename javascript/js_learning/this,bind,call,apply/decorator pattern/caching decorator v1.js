// caching decorator
// make the decorator makeCaching(fn), that takes function fn() and returns wrapper, that caching its result
// function fn() has just one argument and it is a number

// an arbitrary function
function fn(a) {
  return Math.floor(Math.random() * a);
}

// decorator
function makeCaching(fn) {
  return function(x) {
    x = Array.prototype.slice.call(arguments);
    if (!fn[x]) {
      fn[x] = fn.apply(this, arguments);
    }
    return fn[x];
  }
}

// wrap function fn() in the decorator
fn = makeCaching(fn);

var a, b;

a = fn(25);
b = fn(25);

console.log(a); // 14
console.log(b); // 14
console.log(a == b); // true


a = fn(25); // 14
b = fn(24); // 4
console.log(a);
console.log(b);
console.log(a == b); // false
