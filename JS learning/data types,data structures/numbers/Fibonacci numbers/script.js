// Fibonacci numbers
// Fn = Fn-1 + Fn-2
// 1, 1, 2, 3, 5, 8, 13, 21...

function fib(n) {
  var a = 1;
  var b = 0;

  for (var i = 0; i < n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}




console.log(fib(77)); // 5527939700884757
