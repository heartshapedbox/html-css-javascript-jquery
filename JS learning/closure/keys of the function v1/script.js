// Function is an object so we can assign the keys directly to it

function counter() {
  // counter.[[Scope]] = window
  // LexicalEnvironment = {}
  // LexicalEnvironment = counter.[[Scope]]
  return counter.count++;
}

// LexicalEnvironment = {counter.count: undefined}
counter.count = 1;
// LexicalEnvironment = {counter.count: 1}

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
console.log(counter()); // 4
console.log(counter()); // 5
