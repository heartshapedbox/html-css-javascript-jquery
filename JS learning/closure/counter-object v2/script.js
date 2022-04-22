// Make a function counter() that returns the object with several methods (nextCount, set, reset)
// All methods get [[Scope]] = counter();

function counter() {
  // counter.[[Scope]] = window
  // LexicalEnvironment = {start: undefined}
  var start = 50
  // LexicalEnvironment = {start: 50}

  // LexicalEnvironment = {currentCount: undefined}
  var currentCount = start;
  // LexicalEnvironment = {currentCount: start}

  return {
    nextCount: function() {
      // function.[[Scope]] = counter()
      // LexicalEnvironment = {}
      // LexicalEnvironment = function.[[Scope]]
      return currentCount++;
    },

    set: function(value) {
      // function.[[Scope]] = counter()
      // LexicalEnvironment = {}
      // LexicalEnvironment = functon.[[Scope]]
      currentCount = value;
    },

    reset: function() {
      // function.[[Scope]] = counter()
      // LexicalEnvironment = {}
      // LexicalEnvironment = function.[[Scope]]
      currentCount = start;
    }
  }
}

var result = counter();

console.log(result.nextCount()); // 50
console.log(result.nextCount()); // 51
console.log(result.nextCount()); // 52

result.set(100);

console.log(result.nextCount()); // 100
console.log(result.nextCount()); // 101
console.log(result.nextCount()); // 102

result.reset();

console.log(result.nextCount()); // 50
