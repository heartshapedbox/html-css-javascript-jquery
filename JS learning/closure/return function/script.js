// Create a function counter() that counts its calls and returns the current number of ones
// Inside a function another one is created and returned as the result


function counter() {
  // counter.[[Scope]] = window
  // LexicalEnvironment = {currentCount: undefined}
  var currentCount = 1;
  // LexicalEnvironment = {currentCount: 1}

  return function fn() {
    // fn.[[Scope]] = counter()
    // LexicalEnvironment = {}
    // LexicalEnvironment = fn.[[Scope]]
    return currentCount++;
  }
}

var result = counter();

console.log(result()); // 1
console.log(result()); // 2
console.log(result()); // 3

var result2 = counter();

console.log(result2()); // 1
console.log(result2()); // 2
console.log(result2()); // 3
