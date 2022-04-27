//Fibonacci numbers and Binet's formula


// function fib()
function fib(n) {
  var a = 1;
  var b = 0;
  var x;

  for (i = 0; i < n; i++) {
    x = a + b;
    a = b;
    b = x;
  }
  return x;
}

// function fibBinet()
function fibBinet(n) {
  var ϕ = (1 + Math.sqrt(5)) / 2;
  return Math.round(Math.pow(ϕ, n) / Math.sqrt(5));
}



console.log(fib(77)); // 5527939700884757
console.log(fibBinet(77)); // 5527939700884755
