// Make a function counter() that returns "nextCount" funciton with several methods (set, reset)
// All methods get [[Scope]] = counter();

function counter() {
  // counter.[[Scope]] = window
  // LexicalEnvironment = {start: undefined}
  var start = 1;
  // LexicalEnvironment = {start: 1}

  // LexicalEnvironment = {currentCount: undefined}
  var currentCount = start;
  // LexicalEnvironment = {currentCount: start}

  function nextCount() {
    // nextCount.[[Scope]] = counter()
    // LexicalEnvironment = {}
    // LexicalEnvironment = nextCount.[[Scope]]
    return currentCount++;
  }

  nextCount.set = function(value) {
    // function.[[Scope]] = counter()
    // LexicalEnvironment = {}
    // LexicalEnvironment = nextCount.[[Scope]]
    currentCount = value;
  }

  nextCount.reset = function() {
    // function.[[Scope]] = counter()
    // LexicalEnvironment = {}
    // LexicalEnvironment = nextCount.[[Scope]]
    currentCount = start;
  }

  return nextCount;
}

// LexicalEnvironment = {result: undefined}
var result = counter();
// LexicalEnvironment = {result: counter()}

console.log(result()); // 1
console.log(result()); // 25
console.log(result()); // 3

result.set(10);

console.log(result()); // 10
console.log(result()); // 11
console.log(result()); // 12

result.reset();

console.log(result()); // 1
