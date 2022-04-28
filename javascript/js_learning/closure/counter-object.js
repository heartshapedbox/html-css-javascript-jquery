// Make a function counter() that returns the object with several methods (nextCount, set, reset)
// All methods get [[Scope]] = counter();

function counter() {
  // [[Scope]] = window
  // LexicalEnvironment = {count: undefined}
  var count = 0;
  // LexicalEnvironment = {count: 0}

  return {
    nextCount: function() {
      // [[Scope]] = counter()
      // LexicalEnvironment = {}
      // LexicalEnvironment = funciton.[[Scope]]
      return count++;
    },

    set: function(value) {
      // [[Scope]] = counter()
      // LexicalEnvironment = {}
      // LexicalEnvironment = function.[[Scope]]
      count = value;
    },

    reset: function() {
      // [[Scope]] = counter()
      // LexicalEnvironment = {}
      // LexicalEnvironment = function.[[Scope]]
      count = 0;
    }
  }
}

var result = counter();

console.log(result.nextCount()); // 0
console.log(result.nextCount()); // 1
console.log(result.nextCount()); // 2

result.set(10);

console.log(result.nextCount()); // 10
console.log(result.nextCount()); // 11
console.log(result.nextCount()); // 12

result.reset();

console.log(result.nextCount()); // 0
