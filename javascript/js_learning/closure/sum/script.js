// Write function sum() that operates as sum(a)(b) == a+b

function sum(a) {
  return function f(b) {
    return a + b;
  }
}


console.log(sum(1)(2)); // 3
console.log(sum(5)(-2)); // 3
