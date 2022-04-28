// Fibonacci numbers
// Fn = Fn-1 + Fn-2
// 1, 1, 2, 3, 5, 8, 13, 21...

function fib(n) {
  var a = 1;
  var b = 2;


  // we indicated first two values as a = 1 and b = 2
  // so, skip first two loops and start from the 3rd loop
  for (var i = 3; i < n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}


// getting the results starting from the 3rd loop;
console.log(fib(3)); // 2
console.log(fib(4)); // 3
console.log(fib(5)); // 5
console.log(fib(6)); // 8
console.log(fib(7)); // 13
